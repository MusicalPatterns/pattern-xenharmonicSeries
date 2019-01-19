import { Base, NumericOperation, Power } from '@musical-patterns/utilities'

interface BuildSequenceParameters {
    base: Base,
    boundedNumbers: number[],
    initialPartial: number,
    operation: NumericOperation,
    power: Power,
    useBase: boolean,
}

export {
    BuildSequenceParameters,
}
