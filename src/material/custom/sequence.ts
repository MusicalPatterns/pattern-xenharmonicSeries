import { apply, Base, from, INITIAL, isUndefined, Ordinal, Power, reciprocal, to } from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct, Term, to as xenharmonicSeriesTo } from '../../nominal'
import {
    ComputePartialParameters,
    ComputeSequenceParameters,
    ComputeTermFunction,
    XenharmonicSequence,
} from './types'

const indexToPower: ComputeTermFunction =
    (index: Ordinal, power: Power): Term =>
        xenharmonicSeriesTo.Term(from.Ordinal(
            apply.Power(index, power) === Infinity ? INITIAL : apply.Power(index, power),
        ))

const indexToPowerUsingBase: ComputeTermFunction =
    (index: Ordinal, power: Power, base: Base = to.Base(1)): Term =>
        xenharmonicSeriesTo.Term(from.Base(
            apply.Power(
                base,
                to.Power(xenharmonicSeriesFrom.Term(indexToPower(index, power))),
            ),
        ))

const computeNextPartial: (parameters: ComputePartialParameters) => PartialSumOrProduct =
    ({ specs, index, computeTermFunction, partial, operation }: ComputePartialParameters): PartialSumOrProduct => {
        const { power, base, termCoefficient } = specs

        const term: Term = computeTermFunction(index, power, base)
        const termWithCoefficientApplied: Term = apply.Scalar(term, termCoefficient)

        return xenharmonicSeriesTo.PartialSumOrProduct(
            operation(
                xenharmonicSeriesFrom.PartialSumOrProduct(partial),
                xenharmonicSeriesFrom.Term(termWithCoefficientApplied),
            ),
        )
    }

const computeSequence: (parameters: ComputeSequenceParameters) => XenharmonicSequence =
    ({ partialSeed, operation, boundedNumbers, specs }: ComputeSequenceParameters): XenharmonicSequence => {
        const { constant, useBase, ground } = specs
        let previousPartial: PartialSumOrProduct = partialSeed

        let firstPartial: PartialSumOrProduct

        return boundedNumbers
            .map(to.Ordinal)
            .map((index: Ordinal): PartialSumOrProduct => {
                const computeTermFunction: ComputeTermFunction =
                    useBase ? indexToPowerUsingBase : indexToPower

                previousPartial = computeNextPartial({
                    computeTermFunction,
                    index,
                    operation,
                    partial: previousPartial,
                    specs,
                })

                return previousPartial
            })
            .map((partial: PartialSumOrProduct) => apply.Translation(partial, constant))
            .map((partial: PartialSumOrProduct) => {
                if (isUndefined(firstPartial)) {
                    firstPartial = partial
                }

                return ground ?
                    apply.Scalar(
                        partial,
                        to.Scalar(xenharmonicSeriesFrom.PartialSumOrProduct(reciprocal(firstPartial))),
                    ) :
                    partial
            })
    }

export {
    computeSequence,
}
