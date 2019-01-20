import {
    add,
    ADDITIVE_IDENTITY,
    apply,
    Base,
    from,
    MULTIPLICATIVE_IDENTITY,
    multiply,
    NumericOperation,
    Power,
    Scalar,
    to,
} from '@musical-patterns/utilities'
import { buildBoundedNumbers } from '../custom'
import { SequenceType, XenharmonicSeriesSpec } from '../specs'
import { BuildSequenceParameters } from './types'

const kToPower: (k: number, power: Power) => number =
    (k: number, power: Power): number =>
        apply.Power(k, power) === Infinity ? 0 : apply.Power(k, power)

const kToPowerUsingBase: (k: number, power: Power, base: Base) => number =
    (k: number, power: Power, base: Base): number =>
        from.Base(apply.Power(base, to.Power(kToPower(k, power))))

const buildSequence: (parameters: BuildSequenceParameters) => Scalar[] =
    ({ initialPartial, operation, boundedNumbers, useBase, power, base }: BuildSequenceParameters): Scalar[] => {
        let partial: number = initialPartial

        return boundedNumbers
            .map((k: number) => {
                partial = useBase ?
                    operation(partial, kToPowerUsingBase(k, power, base)) :
                    operation(partial, kToPower(k, power))

                return partial
            })
            .map(to.Scalar)
    }

const buildScalars: (spec: XenharmonicSeriesSpec) => Scalar[] =
    ({ base, sequenceType, power, lowerBound, upperBound, useBase }: XenharmonicSeriesSpec): Scalar[] => {
        const boundedNumbers: number[] = buildBoundedNumbers(lowerBound, upperBound)

        let initialPartial: number
        let operation: NumericOperation
        switch (sequenceType) {
            case SequenceType.PARTIAL_SUM: {
                initialPartial = ADDITIVE_IDENTITY
                operation = add
                break
            }
            case SequenceType.PARTIAL_PRODUCT: {
                initialPartial = MULTIPLICATIVE_IDENTITY
                operation = multiply
                break
            }
            default:
                throw new Error('Unknown sequence type.')
        }

        return buildSequence({ base, boundedNumbers, initialPartial, operation, power, useBase })
    }

export {
    buildScalars,
}
