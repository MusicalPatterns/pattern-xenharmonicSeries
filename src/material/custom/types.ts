import { Base, NumericOperation, Ordinal, Power } from '@musical-patterns/utilities'
import { PartialSumOrProduct, Term } from '../../nominal'
import { XenharmonicSeriesSpec } from '../../spec'

interface ComputeSequenceParameters {
    boundedNumbers: number[],
    operation: NumericOperation,
    partialSeed: PartialSumOrProduct,
    spec: XenharmonicSeriesSpec,
}

type ComputeTermFunction = (index: Ordinal, power: Power, base?: Base) => Term

interface ComputePartialParameters {
    computeTermFunction: ComputeTermFunction,
    index: Ordinal,
    operation: NumericOperation,
    partial: PartialSumOrProduct,
    spec: XenharmonicSeriesSpec
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
