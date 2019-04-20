// tslint:disable no-magic-numbers

import {
    Exponent,
    Hz,
    negative,
    ofFrom,
    Ordinal,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
    Translation,
} from '@musical-patterns/utilities'
import { PartialSumOrProduct, to as xenharmonicSeriesTo } from './nominals'

const XENHARMONIC_SERIES_INITIAL_LOWER_BOUND: Ordinal<PartialSumOrProduct> = to.Ordinal<PartialSumOrProduct>(1)
const XENHARMONIC_SERIES_INITIAL_UPPER_BOUND: Ordinal<PartialSumOrProduct> = to.Ordinal<PartialSumOrProduct>(32)

const XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    to.Scalar(ofFrom(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._3 ]))
const XENHARMONIC_SERIES_INITIAL_EXPONENT: Exponent = to.Exponent(negative(1))

const XENHARMONIC_SERIES_INITIAL_CONSTANT: Translation<PartialSumOrProduct> =
    to.Translation(ofFrom(xenharmonicSeriesTo.PartialSumOrProduct(0)))

export {
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    XENHARMONIC_SERIES_INITIAL_EXPONENT,
    XENHARMONIC_SERIES_INITIAL_CONSTANT,
}
