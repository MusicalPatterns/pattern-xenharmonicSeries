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
import { SequenceType, XenharmonicSeriesSpec } from '../spec'
import { BuildSequenceParameters, CalculatePartialFunction, CalculatePartialParameters } from './types'

const indexToPower: CalculatePartialFunction =
    (k: number, power: Power): number =>
        apply.Power(k, power) === Infinity ? 0 : apply.Power(k, power)

const indexToPowerUsingBase: CalculatePartialFunction =
    (k: number, power: Power, base: Base = to.Base(1)): number =>
        from.Base(apply.Power(base, to.Power(indexToPower(k, power))))

const calculatePartial: (parameters: CalculatePartialParameters) => number =
    ({ spec, index, calculatePartialFunction, partial, operation }: CalculatePartialParameters): number => {
        const { power, base, termCoefficient } = spec

        return operation(partial, apply.Scalar(calculatePartialFunction(index, power, base), termCoefficient))
    }

const buildSequence: (parameters: BuildSequenceParameters) => number[] =
    ({ initialPartial, operation, boundedNumbers, spec }: BuildSequenceParameters): number[] => {
        const { constant, useBase, ground } = spec
        let partial: number = initialPartial

        let firstElement: number

        return boundedNumbers
            .map((index: number) => {
                const calculatePartialFunction: CalculatePartialFunction =
                    useBase ? indexToPowerUsingBase : indexToPower

                partial = calculatePartial({ partial, operation, calculatePartialFunction, index, spec })

                return partial
            })
            .map((term: number) => term + constant)
            .map((term: number) => {
                if (!firstElement) {
                    firstElement = term
                }

                return ground ? term / firstElement : term
            })
    }

const buildScalars: (spec: XenharmonicSeriesSpec) => Scalar[] =
    (spec: XenharmonicSeriesSpec): Scalar[] => {
        const { sequenceType, lowerBound, upperBound, iterations } = spec
        const boundedNumbers: number[] = buildBoundedNumbers(lowerBound, to.Index(from.Index(upperBound) + 1))

        let initialPartial: number
        let operation: NumericOperation
        switch (sequenceType) {
            case SequenceType.PARTIAL_SUM: {
                initialPartial = from.Offset(ADDITIVE_IDENTITY)
                operation = add
                break
            }
            case SequenceType.PARTIAL_PRODUCT: {
                initialPartial = from.Scalar(MULTIPLICATIVE_IDENTITY)
                operation = multiply
                break
            }
            default:
                throw new Error('Unknown sequence type.')
        }

        const sequence: number[] = buildSequence({ boundedNumbers, spec, initialPartial, operation })
        const window: number = sequence.pop() as number

        let results: number[] = []
        for (let i: number = 0; i < from.Count(iterations); i += 1) {
            const iteration: number[] = sequence.map((term: number) => term * apply.Power(window, to.Power(i)))
            results = results.concat(iteration)
        }

        return results
            .map(to.Scalar)
    }

export {
    buildScalars,
}
