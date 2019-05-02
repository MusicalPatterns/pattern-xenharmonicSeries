import { as, Ordinal, TwoToOneNumericOperation, use } from '@musical-patterns/utilities'
import { PartialSumOrProduct, Term, xenharmonicSeriesAs } from '../../nominals'
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
        const termWithCoefficientApplied: Term = use.Scalar(term, termCoefficient)

        return xenharmonicSeriesAs.PartialSumOrProduct(
            operation(
                as.number(partial),
                as.number(termWithCoefficientApplied),
            ),
        )
    }

export {
    computeNextPartial,
}
