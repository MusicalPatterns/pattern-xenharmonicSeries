import { Base, NumericOperation, Ordinal, Power } from '@musical-patterns/utilities'
import { PartialSumOrProduct, Term } from '../../nominals'
import { XenharmonicSeriesSpecs } from '../../spec'

interface ComputeSequenceParameters {
    boundedNumbers: number[],
    operation: NumericOperation,
    partialSeed: PartialSumOrProduct,
    specs: XenharmonicSeriesSpecs,
}

type ComputeTermFunction = (index: Ordinal, power: Power, base?: Base) => Term

interface ComputePartialParameters {
    computeTermFunction: ComputeTermFunction,
    index: Ordinal,
    operation: NumericOperation,
    partial: PartialSumOrProduct,
    specs: XenharmonicSeriesSpecs
}

interface SequenceTypeParameters {
    operation: NumericOperation,
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
