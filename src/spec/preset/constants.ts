// tslint:disable no-magic-numbers

import {
    AnyArrayedOrStringType,
    as,
    INITIAL,
    Ordinal,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    SCIENTIFIC_PITCHES,
    Tone,
    use,
} from '@musical-patterns/utilities'

const UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO: Ordinal =
    use.Cardinal(INITIAL, as.Cardinal<Ordinal<AnyArrayedOrStringType>>(32))
const SUBHARMONIC_INITIAL_HZ_PHYSICALIZATION: Tone =
    SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ]

export {
    UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO,
    SUBHARMONIC_INITIAL_HZ_PHYSICALIZATION,
}
