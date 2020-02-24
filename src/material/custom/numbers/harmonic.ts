import { as, Block, finalElement, forEach, INCLUSIVE, ONE, range, reciprocal, use } from '@musical-patterns/utilities'
import { ComputeNumbers, ComputeNumbersParameters } from './types'

const computeHarmonicNumbers: ComputeNumbers =
    ({ upperBound }: ComputeNumbersParameters): Block => {
        const numbers: number[] = range(ONE, use.Cardinal(upperBound, INCLUSIVE))

        const harmonicNumbers: number[] = [ 0 ]

        forEach(numbers, (num: number): void => {
            harmonicNumbers.push(reciprocal(num) + finalElement(harmonicNumbers))
        })

        return as.Block(harmonicNumbers)
    }

export {
    computeHarmonicNumbers,
}
