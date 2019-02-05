import { Base, NumericOperation, Power } from '@musical-patterns/utilities'
import { PartialSumOrProduct, Term } from '../nominal'
import { XenharmonicSeriesSpec } from '../spec'

interface BuildSequenceParameters {
    boundedNumbers: number[],
    operation: NumericOperation,
    partialSeed: PartialSumOrProduct,
    spec: XenharmonicSeriesSpec,
}

type CalculateTermFunction = (k: number, power: Power, base?: Base) => Term

interface CalculatePartialParameters {
    calculateTermFunction: CalculateTermFunction,
    index: number,
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
    BuildSequenceParameters,
    CalculateTermFunction,
    CalculatePartialParameters,
    SequenceTypeParameters,
    XenharmonicSequence,
}
