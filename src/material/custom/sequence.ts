import {
    as,
    Exponent,
    Frequency,
    INITIAL,
    isUndefined,
    Logarithm,
    notAs,
    ofNotAs,
    Ordinal,
    reciprocal,
    TwoToOneNumericOperation,
    use,
} from '@musical-patterns/utilities'
import { as as xenharmonicSeriesTo, notAs as xenharmonicSeriesFrom, PartialSumOrProduct, Term } from '../../nominals'
import { XenharmonicSeriesSpecs } from '../../spec'
import { computeNextPartial } from './nextPartial'
import { ComputeSequenceParameters, ComputeTermFunction, XenharmonicSequence } from './types'

const indexToExponent: ComputeTermFunction =
    (index: Ordinal, exponent: Exponent): Term =>
        xenharmonicSeriesTo.Term(
            use.Exponent(notAs.Ordinal(index), exponent) === Infinity ?
                INITIAL :
                use.Exponent(notAs.Ordinal(index), exponent),
        )

const indexToExponentUsingLogarithm: ComputeTermFunction =
    (index: Ordinal, exponent: Exponent, logarithm: Logarithm<Frequency> = as.Logarithm<Frequency>(1)): Term =>
        xenharmonicSeriesTo.Term(notAs.Logarithm<Frequency>(
            use.Exponent(
                logarithm,
                as.Exponent<Logarithm<Frequency>>(xenharmonicSeriesFrom.Term(indexToExponent(index, exponent))),
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
            .map(as.Ordinal)
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
            .map((partial: PartialSumOrProduct) => use.Translation(partial, constant))
            .map((partial: PartialSumOrProduct) => {
                if (isUndefined(firstPartial)) {
                    firstPartial = partial
                }

                return ground ?
                    use.Scalar(
                        partial,
                        as.Scalar(ofNotAs(reciprocal(firstPartial))),
                    ) :
                    partial
            })
    }

export {
    computeSequence,
}
