// tslint:disable no-magic-numbers

import {
    as,
    Exponent,
    negative,
    ofNotAs,
    Ordinal,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Tone,
    Translation,
} from '@musical-patterns/utilities'
import { XenharmonicSequence } from './material'
import { PartialSumOrProduct, xenharmonicSeriesAs } from './nominals'

const XENHARMONIC_SERIES_INITIAL_LOWER_BOUND: Ordinal<XenharmonicSequence> = as.Ordinal<XenharmonicSequence>(1)
const XENHARMONIC_SERIES_INITIAL_UPPER_BOUND: Ordinal<XenharmonicSequence> = as.Ordinal<XenharmonicSequence>(32)

const XENHARMONIC_SERIES_INITIAL_HZ_PHYSICALIZATION: Tone =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._3 ]
const XENHARMONIC_SERIES_INITIAL_EXPONENT: Exponent = as.Exponent(negative(1))

const XENHARMONIC_SERIES_INITIAL_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation(ofNotAs(xenharmonicSeriesAs.PartialSumOrProduct(0)))

export {
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    XENHARMONIC_SERIES_INITIAL_HZ_PHYSICALIZATION,
    XENHARMONIC_SERIES_INITIAL_EXPONENT,
    XENHARMONIC_SERIES_INITIAL_CONSTANT,
}
