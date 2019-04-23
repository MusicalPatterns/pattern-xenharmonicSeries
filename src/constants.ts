// tslint:disable no-magic-numbers

import {
    as,
    Exponent,
    Hz,
    negative,
    ofNotAs,
    Ordinal,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Translation,
} from '@musical-patterns/utilities'
import { XenharmonicSequence } from './material'
import { as as xenharmonicSeriesTo, PartialSumOrProduct } from './nominals'

const XENHARMONIC_SERIES_INITIAL_LOWER_BOUND: Ordinal<XenharmonicSequence> = as.Ordinal<XenharmonicSequence>(1)
const XENHARMONIC_SERIES_INITIAL_UPPER_BOUND: Ordinal<XenharmonicSequence> = as.Ordinal<XenharmonicSequence>(32)

const XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    as.Scalar(ofNotAs(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._3 ]))
const XENHARMONIC_SERIES_INITIAL_EXPONENT: Exponent = as.Exponent(negative(1))

const XENHARMONIC_SERIES_INITIAL_CONSTANT: Translation<PartialSumOrProduct> =
    as.Translation(ofNotAs(xenharmonicSeriesTo.PartialSumOrProduct(0)))

export {
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    XENHARMONIC_SERIES_INITIAL_EXPONENT,
    XENHARMONIC_SERIES_INITIAL_CONSTANT,
}
