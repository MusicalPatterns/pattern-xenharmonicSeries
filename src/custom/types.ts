import { Base, NumericOperation, Power } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'

interface BuildSequenceParameters {
    boundedNumbers: number[],
    initialPartial: number,
    operation: NumericOperation,
    spec: XenharmonicSeriesSpec,
}

type CalculatePartialFunction = (k: number, power: Power, base?: Base) => number

interface CalculatePartialParameters {
    calculatePartialFunction: CalculatePartialFunction,
    index: number,
    operation: NumericOperation,
    partial: number,
    spec: XenharmonicSeriesSpec
}

interface SequenceTypeParameters {
    initialPartial: number,
    operation: NumericOperation,
}

export {
    BuildSequenceParameters,
    CalculatePartialFunction,
    CalculatePartialParameters,
    SequenceTypeParameters,
}
