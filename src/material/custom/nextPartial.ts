import { apply, Ordinal, TwoToOneNumericOperation } from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct, Term, to as xenharmonicSeriesTo } from '../../nominals'
import { XenharmonicSeriesSpecs } from '../../spec'
import { ComputePartialParameters, ComputeTermFunction } from './types'

const computeNextPartial: (parameters: {
    computeTermFunction: ComputeTermFunction,
    index: Ordinal,
    operation: TwoToOneNumericOperation,
    partial: PartialSumOrProduct,
    specs: XenharmonicSeriesSpecs,
}) => PartialSumOrProduct =
    ({ specs, index, computeTermFunction, partial, operation }: ComputePartialParameters): PartialSumOrProduct => {
        const { exponent, logarithm, termCoefficient } = specs

        const term: Term = computeTermFunction(index, exponent, logarithm)
        const termWithCoefficientApplied: Term = apply.Scalar(term, termCoefficient)

        return xenharmonicSeriesTo.PartialSumOrProduct(
            operation(
                xenharmonicSeriesFrom.PartialSumOrProduct(partial),
                xenharmonicSeriesFrom.Term(termWithCoefficientApplied),
            ),
        )
    }

export {
    computeNextPartial,
}
