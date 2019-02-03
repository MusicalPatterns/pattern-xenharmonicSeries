// tslint:disable:no-magic-numbers

import {
    apply,
    Count,
    EVERY_OTHER,
    from, HALF, Index,
    OCTAVE,
    Offset,
    to,
    TRITAVE,
    windowStepCount,
} from '@musical-patterns/utilities'
import { initial } from './initial'
import { XenharmonicSeriesSpecProperty } from './types'

const SECOND: Count = to.Count(2)
const THIRD: Count = to.Count(3)
const FOURTH: Count = to.Count(4)
const EIGHTH: Count = to.Count(8)

const THIRD_TRITAVE_ODD_HARMONICS_CONSTANT: number = apply.Offset(
    from.Base(apply.Power(TRITAVE, to.Power(apply.Offset(from.Count(THIRD), to.Offset(-1))))),
    to.Offset(-from.Scalar(EVERY_OTHER)),
)
const THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND: Index = apply.Scalar(
    to.Index(from.Count(windowStepCount(TRITAVE, THIRD))),
    HALF,
)
const XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT: Count = to.Count(3)
const FOURTH_OCTAVE_HARMONICS_CONSTANT: number = apply.Offset(
    from.Base(apply.Power(OCTAVE, to.Power(apply.Offset(from.Count(FOURTH), to.Offset(-1))))),
    to.Offset(-from.Scalar(initial[ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ])),
)
const EIGHTH_OCTAVE_HARMONICS_CONSTANT: number = apply.Offset(
    from.Base(apply.Power(OCTAVE, to.Power(apply.Offset(from.Count(EIGHTH), to.Offset(-1))))),
    to.Offset(-from.Scalar(initial[ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ])),
)
const DU_PARTICULATE: Offset = to.Offset(2)

export {
    SECOND,
    THIRD,
    FOURTH,
    EIGHTH,
    THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND,
    XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
    FOURTH_OCTAVE_HARMONICS_CONSTANT,
    EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    DU_PARTICULATE,
}
