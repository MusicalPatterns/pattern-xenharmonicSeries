import { as, Block, INCLUSIVE, INITIAL, range, use } from '@musical-patterns/utilities'
import { ComputeNumbers, ComputeNumbersParameters } from './types'

const computeNaturalNumbers: ComputeNumbers =
    ({ upperBound }: ComputeNumbersParameters): Block =>
        as.Block(range(INITIAL, use.Cardinal(upperBound, INCLUSIVE)))

export {
    computeNaturalNumbers,
}
