// tslint:disable no-magic-numbers

import {
    apply,
    Cardinal,
    EIGHTH,
    EVERY_OTHER,
    FOURTH,
    from,
    negative,
    OCTAVE,
    ONE_HALF,
    Ordinal,
    THIRD,
    to,
    Translation,
    TRITAVE,
    windowStepCount,
} from '@musical-patterns/utilities'
import { initial } from './initial'
import { XenharmonicSeriesSpecProperty } from './types'

const THIRD_TRITAVE_ODD_HARMONICS_CONSTANT: Translation = to.Translation(apply.Translation(
    from.Base(apply.Power(TRITAVE, to.Power(from.Ordinal(apply.Translation(THIRD, to.Translation(-1)))))),
    to.Translation(from.Cardinal(negative(EVERY_OTHER))),
))
const THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND: Ordinal = apply.Scalar(
    to.Ordinal(from.Cardinal(windowStepCount(TRITAVE, to.Cardinal(from.Ordinal(THIRD))))),
    ONE_HALF,
)
const XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT: Cardinal = to.Cardinal(3)
const FOURTH_OCTAVE_HARMONICS_CONSTANT: Translation = to.Translation(apply.Translation(
    from.Base(apply.Power(OCTAVE, to.Power(from.Ordinal(apply.Translation(FOURTH, to.Translation(-1)))))),
    to.Translation(from.Scalar(negative(initial[ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]))),
))
const FOURTH_OCTAVE_HARMONICS_UPPER_BOUND: Ordinal = to.Ordinal(from.Cardinal(
    windowStepCount(OCTAVE, to.Cardinal(from.Ordinal(FOURTH))),
))
const EIGHTH_OCTAVE_HARMONICS_CONSTANT: Translation = to.Translation(apply.Translation(
    from.Base(apply.Power(OCTAVE, to.Power(from.Ordinal(apply.Translation(EIGHTH, to.Translation(-1)))))),
    to.Translation(from.Scalar(negative(initial[ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]))),
))
const EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND: Ordinal = to.Ordinal(from.Cardinal(
    windowStepCount(OCTAVE, to.Cardinal(from.Ordinal(EIGHTH))),
))
const DUPER_OR_DUB_PARTICULATE: Translation = to.Translation(2)

export {
    THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND,
    XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
    FOURTH_OCTAVE_HARMONICS_CONSTANT,
    FOURTH_OCTAVE_HARMONICS_UPPER_BOUND,
    EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND,
    DUPER_OR_DUB_PARTICULATE,
}
