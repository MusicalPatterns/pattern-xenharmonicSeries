// tslint:disable no-magic-numbers

import {
    Hz,
    negative,
    Ordinal,
    Power,
    Scalar,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    to,
} from '@musical-patterns/utilities'

const XENHARMONIC_SERIES_INITIAL_LOWER_BOUND: Ordinal = to.Ordinal(1)
const XENHARMONIC_SERIES_INITIAL_UPPER_BOUND: Ordinal = to.Ordinal(32)

const XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY: Scalar<Hz> =
    to.Scalar(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._3 ])
const XENHARMONIC_SERIES_INITIAL_POWER: Power = to.Power(negative(1))

export {
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    XENHARMONIC_SERIES_INITIAL_POWER,
}
