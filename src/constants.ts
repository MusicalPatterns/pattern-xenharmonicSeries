// tslint:disable no-magic-numbers

import {
    as,
    Exponent,
    negative,
    ofNotAs,
    Ordinal,
    Pitch,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Translation,
} from '@musical-patterns/utilities'
import { XenharmonicSequence } from './material'
import { as as xenharmonicSeriesAs, PartialSumOrProduct } from './nominals'

const XENHARMONIC_SERIES_INITIAL_LOWER_BOUND: Ordinal<XenharmonicSequence> = as.Ordinal<XenharmonicSequence>(1)
const XENHARMONIC_SERIES_INITIAL_UPPER_BOUND: Ordinal<XenharmonicSequence> = as.Ordinal<XenharmonicSequence>(32)

const XENHARMONIC_SERIES_INITIAL_BASIS_FREQUENCY: Pitch =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._3 ]
const XENHARMONIC_SERIES_INITIAL_EXPONENT: Exponent = as.Exponent(negative(1))

const XENHARMONIC_SERIES_INITIAL_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation(ofNotAs(xenharmonicSeriesAs.PartialSumOrProduct(0)))

export {
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    XENHARMONIC_SERIES_INITIAL_BASIS_FREQUENCY,
    XENHARMONIC_SERIES_INITIAL_EXPONENT,
    XENHARMONIC_SERIES_INITIAL_CONSTANT,
}
