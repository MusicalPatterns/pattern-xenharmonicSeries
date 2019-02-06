import { apply, Base, from, Power, reciprocal, to } from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct, Term, to as xenharmonicSeriesTo } from '../nominal'
import {
    BuildSequenceParameters,
    CalculatePartialParameters,
    CalculateTermFunction,
    XenharmonicSequence,
} from './types'

const indexToPower: CalculateTermFunction =
    (k: number, power: Power): Term =>
        xenharmonicSeriesTo.Term(
            apply.Power(k, power) === Infinity ? 0 : apply.Power(k, power),
        )

const indexToPowerUsingBase: CalculateTermFunction =
    (k: number, power: Power, base: Base = to.Base(1)): Term =>
        xenharmonicSeriesTo.Term(from.Base(
            apply.Power(
                base,
                to.Power(xenharmonicSeriesFrom.Term(
                    indexToPower(k, power),
                )),
            ),
        ))

const calculateNextPartial: (parameters: CalculatePartialParameters) => PartialSumOrProduct =
    ({ spec, index, calculateTermFunction, partial, operation }: CalculatePartialParameters): PartialSumOrProduct => {
        const { power, base, termCoefficient } = spec

        const term: Term = calculateTermFunction(index, power, base)
        const termWithCoefficientApplied: Term = apply.Scalar(term, termCoefficient)

        return xenharmonicSeriesTo.PartialSumOrProduct(
            operation(
                xenharmonicSeriesFrom.PartialSumOrProduct(partial),
                xenharmonicSeriesFrom.Term(termWithCoefficientApplied),
            ),
        )
    }

const buildSequence: (parameters: BuildSequenceParameters) => XenharmonicSequence =
    ({ partialSeed, operation, boundedNumbers, spec }: BuildSequenceParameters): XenharmonicSequence => {
        const { constant, useBase, ground } = spec
        let previousPartial: PartialSumOrProduct = partialSeed

        let firstPartial: PartialSumOrProduct

        return boundedNumbers
            .map((index: number): PartialSumOrProduct => {
                const calculateTermFunction: CalculateTermFunction =
                    useBase ? indexToPowerUsingBase : indexToPower

                previousPartial = calculateNextPartial({
                    calculateTermFunction,
                    index,
                    operation,
                    partial: previousPartial,
                    spec,
                })

                return previousPartial
            })
            .map((partial: PartialSumOrProduct) => apply.Translation(partial, constant))
            .map((partial: PartialSumOrProduct) => {
                if (!firstPartial) {
                    firstPartial = partial
                }

                return ground ?
                    apply.Scalar(
                        partial,
                        to.Scalar(reciprocal(xenharmonicSeriesFrom.PartialSumOrProduct(firstPartial))),
                    ) :
                    partial
            })
    }

export {
    buildSequence,
}
