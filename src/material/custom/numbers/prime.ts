import { as, Block, PRIMES } from '@musical-patterns/utilities'
import { ComputeNumbers } from './types'

const computePrimeNumbers: ComputeNumbers = (): Block => as.Block(PRIMES)

export {
    computePrimeNumbers,
}
