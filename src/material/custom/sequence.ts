import {
    apply,
    Exponent,
    Frequency,
    from,
    INITIAL,
    isUndefined,
    Logarithm,
    ofFrom,
    Ordinal,
    reciprocal,
    to,
    TwoToOneNumericOperation,
} from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct, Term, to as xenharmonicSeriesTo } from '../../nominals'
import { XenharmonicSeriesSpecs } from '../../spec'
import { computeNextPartial } from './nextPartial'
import { ComputeSequenceParameters, ComputeTermFunction, XenharmonicSequence } from './types'

const indexToExponent: ComputeTermFunction =
    (index: Ordinal, exponent: Exponent): Term =>
        xenharmonicSeriesTo.Term(
            apply.Exponent(from.Ordinal(index), exponent) === Infinity ?
                INITIAL :
                apply.Exponent(from.Ordinal(index), exponent),
        )

const indexToExponentUsingLogarithm: ComputeTermFunction =
    (index: Ordinal, exponent: Exponent, logarithm: Logarithm<Frequency> = to.Logarithm<Frequency>(1)): Term =>
        xenharmonicSeriesTo.Term(from.Logarithm<Frequency>(
            apply.Exponent(
                logarithm,
                to.Exponent<Logarithm<Frequency>>(xenharmonicSeriesFrom.Term(indexToExponent(index, exponent))),
            ),
        ))

const computeSequence: (parameters: {
    boundedNumbers: number[],
    operation: TwoToOneNumericOperation,
    partialSeed: PartialSumOrProduct,
    specs: XenharmonicSeriesSpecs,
}) => XenharmonicSequence =
    ({ partialSeed, operation, boundedNumbers, specs }: ComputeSequenceParameters): XenharmonicSequence => {
        const { constant, useLogarithm, ground } = specs
        let previousPartial: PartialSumOrProduct = partialSeed

        let firstPartial: PartialSumOrProduct

        return boundedNumbers
            .map(to.Ordinal)
            .map((index: Ordinal): PartialSumOrProduct => {
                const computeTermFunction: ComputeTermFunction =
                    useLogarithm ? indexToExponentUsingLogarithm : indexToExponent

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
                        to.Scalar(ofFrom(reciprocal(firstPartial))),
                    ) :
                    partial
            })
    }

export {
    computeSequence,
}
