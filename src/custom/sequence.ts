import { apply, Base, from, Power, to } from '@musical-patterns/utilities'
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

        const term: number = apply.Scalar(calculatePartialFunction(index, power, base), termCoefficient)

        return operation(partial, term)
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

export {
    buildSequence,
}
