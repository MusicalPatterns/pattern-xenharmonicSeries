import { NumberSequence } from '../../../types'
import { computeHarmonicNumbers } from './harmonic'
import { computeMetallicNumbers } from './metallic'
import { computeNaturalNumbers } from './natural'
import { computePrimeNumbers } from './prime'
import { computeSuperparticularNumbers } from './superparticular'
import { ComputeNumbers } from './types'

const numberSequenceToComputeNumbersMap: { [Index in NumberSequence]: ComputeNumbers } = {
    [ NumberSequence.NATURAL_NUMBERS ]: computeNaturalNumbers,
    [ NumberSequence.HARMONIC_NUMBERS ]: computeHarmonicNumbers,
    [ NumberSequence.PRIME_NUMBERS ]: computePrimeNumbers,
    [ NumberSequence.METALLIC_NUMBERS ]: computeMetallicNumbers,
    [ NumberSequence.SUPERPARTICULAR_NUMBERS ]: computeSuperparticularNumbers,
}

export {
    numberSequenceToComputeNumbersMap,
}
