import { Exponent, Frequency, Logarithm, Ordinal, TwoToOneNumericOperation } from '@musical-patterns/utilities'
import { PartialSumOrProduct, Term } from '../../nominals'
import { XenharmonicSeriesSpecs } from '../../spec'

interface ComputeSequenceParameters {
    boundedNumbers: number[],
    operation: TwoToOneNumericOperation,
    partialSeed: PartialSumOrProduct,
    specs: XenharmonicSeriesSpecs,
}

type ComputeTermFunction = (index: Ordinal, exponent: Exponent, logarithm?: Logarithm<Frequency>) => Term

interface ComputePartialParameters {
    computeTermFunction: ComputeTermFunction,
    index: Ordinal,
    operation: TwoToOneNumericOperation,
    partial: PartialSumOrProduct,
    specs: XenharmonicSeriesSpecs
}

interface SequenceTypeParameters {
    operation: TwoToOneNumericOperation,
    partialSeed: PartialSumOrProduct,
}

type XenharmonicSequence = PartialSumOrProduct[]

export {
    ComputeSequenceParameters,
    ComputeTermFunction,
    ComputePartialParameters,
    SequenceTypeParameters,
    XenharmonicSequence,
}
