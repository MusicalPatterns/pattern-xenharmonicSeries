// tslint:disable no-magic-numbers

import {
    Frequency,
    Ordinal,
    Power,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const XENHARMONIC_SERIES_INITIAL_LOWER_BOUND: Ordinal = to.Ordinal(1)
const XENHARMONIC_SERIES_INITIAL_UPPER_BOUND: Ordinal = to.Ordinal(32)

const XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY: Frequency =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._3 ]
const XENHARMONIC_SERIES_INITIAL_POWER: Power = to.Power(-1)

export {
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    XENHARMONIC_SERIES_INITIAL_POWER,
}
