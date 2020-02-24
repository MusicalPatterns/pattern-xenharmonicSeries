// tslint:disable no-magic-numbers

import {
    as,
    asRational,
    Cardinal,
    Ordinal,
    Rational,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    SCIENTIFIC_PITCHES,
    Tone,
    use,
} from '@musical-patterns/utilities'
import { XenharmonicSequence } from './nominals'

const XENHARMONIC_SERIES_INITIAL_LOWER_BOUND: Ordinal = as.Ordinal(1)
const XENHARMONIC_SERIES_INITIAL_UPPER_BOUND: Ordinal = use.Cardinal(
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    as.Cardinal<Ordinal>(32),
)

const XENHARMONIC_SERIES_INITIAL_HZ_PHYSICALIZATION: Tone =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._1 ]
const XENHARMONIC_SERIES_INITIAL_ITERATIONS: Cardinal<XenharmonicSequence[]> = as.Cardinal<XenharmonicSequence[]>(1)

const XENHARMONIC_SERIES_INITIAL_COEFFICIENT: Rational = asRational(1, 1)

export {
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    XENHARMONIC_SERIES_INITIAL_HZ_PHYSICALIZATION,
    XENHARMONIC_SERIES_INITIAL_ITERATIONS,
    XENHARMONIC_SERIES_INITIAL_COEFFICIENT,
}
