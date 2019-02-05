// tslint:disable:no-magic-numbers

import {
    apply,
    Count,
    EIGHTH,
    EVERY_OTHER,
    FOURTH,
    from,
    Index,
    OCTAVE,
    Offset,
    ONE_HALF,
    THIRD,
    to,
    TRITAVE,
    windowStepCount,
} from '@musical-patterns/utilities'
import { initial } from './initial'
import { XenharmonicSeriesSpecProperty } from './types'

const THIRD_TRITAVE_ODD_HARMONICS_CONSTANT: number = apply.Offset(
    from.Base(apply.Power(TRITAVE, to.Power(from.Index(apply.Offset(THIRD, to.Offset(-1)))))),
    to.Offset(-from.Scalar(EVERY_OTHER)),
)
const THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND: Index = apply.Scalar(
    to.Index(from.Count(windowStepCount(TRITAVE, to.Count(from.Index(THIRD))))),
    ONE_HALF,
)
const XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT: Count = to.Count(3)
const FOURTH_OCTAVE_HARMONICS_CONSTANT: number = apply.Offset(
    from.Base(apply.Power(OCTAVE, to.Power(from.Index(apply.Offset(FOURTH, to.Offset(-1)))))),
    to.Offset(-from.Scalar(initial[ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ])),
)
const FOURTH_OCTAVE_HARMONICS_UPPER_BOUND: Index = to.Index(from.Count(
    windowStepCount(OCTAVE, to.Count(from.Index(FOURTH))),
))
const EIGHTH_OCTAVE_HARMONICS_CONSTANT: number = apply.Offset(
    from.Base(apply.Power(OCTAVE, to.Power(from.Index(apply.Offset(EIGHTH, to.Offset(-1)))))),
    to.Offset(-from.Scalar(initial[ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ])),
)
const EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND: Index = to.Index(from.Count(
    windowStepCount(OCTAVE, to.Count(from.Index(EIGHTH))),
))
const DUPER_OR_DUB_PARTICULATE: Offset = to.Offset(2)

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
