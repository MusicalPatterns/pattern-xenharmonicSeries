import {
    apply,
    Base,
    Frequency,
    from,
    INITIAL,
    isUndefined,
    NumericOperation,
    ofFrom,
    Ordinal,
    Power,
    reciprocal,
    to,
} from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct, Term, to as xenharmonicSeriesTo } from '../../nominals'
import { XenharmonicSeriesSpecs } from '../../spec'
import { computeNextPartial } from './nextPartial'
import { ComputeSequenceParameters, ComputeTermFunction, XenharmonicSequence } from './types'

const indexToPower: ComputeTermFunction =
    (index: Ordinal, power: Power<Ordinal>): Term =>
        xenharmonicSeriesTo.Term(from.Ordinal(
            apply.Power(index, power) === to.Ordinal(Infinity) ? INITIAL : apply.Power(index, power),
        ))

const indexToPowerUsingBase: ComputeTermFunction =
    (index: Ordinal, power: Power<Ordinal>, base: Base<Frequency> = to.Base<Frequency>(1)): Term =>
        xenharmonicSeriesTo.Term(from.Base<Frequency>(
            apply.Power(
                base,
                to.Power<Base<Frequency>>(xenharmonicSeriesFrom.Term(indexToPower(index, power))),
            ),
        ))

const computeSequence: (parameters: {
    boundedNumbers: number[],
    operation: NumericOperation,
    partialSeed: PartialSumOrProduct,
    specs: XenharmonicSeriesSpecs,
}) => XenharmonicSequence =
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
                        to.Scalar(ofFrom(reciprocal(firstPartial))),
                    ) :
                    partial
            })
    }

export {
    computeSequence,
}
