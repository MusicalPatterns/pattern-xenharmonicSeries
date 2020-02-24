import { as, Block, computeMetallicMean, forEach, INCLUSIVE, range, use, ZERO } from '@musical-patterns/utilities'
import { ComputeNumbers, ComputeNumbersParameters } from './types'

const computeMetallicNumbers: ComputeNumbers =
    ({ upperBound }: ComputeNumbersParameters): Block => {
        const numbers: number[] = range(ZERO, use.Cardinal(upperBound, INCLUSIVE))

        const metallicNumbers: number[] = []

        forEach(numbers, (metallicIndex: number): void => {
            const metallicMean: number = computeMetallicMean(as.Ordinal(metallicIndex))
            metallicNumbers.push(metallicMean)
        })

        return as.Block(metallicNumbers)
    }

export {
    computeMetallicNumbers,
}
