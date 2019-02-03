import { apply, EVERY_OTHER, from, HALF, OCTAVE, to, TRITAVE, windowStepCount } from '@musical-patterns/utilities'
import { EIGHTH, FOURTH, THIRD, XENHARMONIC_SERIES_SCALE_ITERATIONS } from './constants'
import { initial } from './initial'
import { SequenceType, XenharmonicSeriesSpec, XenharmonicSeriesSpecProperty } from './types'

const standardHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesSpecProperty.POWER ]: to.Power(0),
}

const sharedEdHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesSpecProperty.LOWER_BOUND ]: to.Index(0),
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: SequenceType.PARTIAL_PRODUCT,
    [ XenharmonicSeriesSpecProperty.USE_BASE ]: true,
}

const edTwoHarmonicSeriesSpec: XenharmonicSeriesSpec = sharedEdHarmonicSeriesSpec

const edThreeHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedEdHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.BASE ]: TRITAVE,
}

const edEulerHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedEdHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.BASE ]: to.Base(Math.E),
}

const thirdTritaveOddHarmonicsSpec: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: apply.Offset(
        from.Base(apply.Power(TRITAVE, to.Power(apply.Offset(from.Count(THIRD), to.Offset(-1))))),
        to.Offset(-from.Scalar(EVERY_OTHER)),
    ),
    [ XenharmonicSeriesSpecProperty.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_SCALE_ITERATIONS,
    [ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]: EVERY_OTHER,
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: apply.Scalar(
        to.Index(from.Count(windowStepCount(TRITAVE, THIRD))),
        HALF,
    ),
}

const fourthOctaveHarmonics: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: apply.Offset(
        from.Base(apply.Power(OCTAVE, to.Power(apply.Offset(from.Count(FOURTH), to.Offset(-1))))),
        to.Offset(-from.Scalar(initial[ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ])),
    ),
    [ XenharmonicSeriesSpecProperty.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_SCALE_ITERATIONS,
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: to.Index(from.Count(windowStepCount(OCTAVE, FOURTH))),
}

const eighthOctaveHarmonics: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: apply.Offset(
        from.Base(apply.Power(OCTAVE, to.Power(apply.Offset(from.Count(EIGHTH), to.Offset(-1))))),
        to.Offset(-from.Scalar(initial[ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ])),
    ),
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: to.Index(from.Count(windowStepCount(OCTAVE, EIGHTH))),
}

const subharmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: SequenceType.SEQUENCE,
}

const superparticularSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: SequenceType.SEQUENCE,
    [ XenharmonicSeriesSpecProperty.USE_PARTICULATE ]: true,
}

export {
    edEulerHarmonicSeriesSpec,
    edThreeHarmonicSeriesSpec,
    edTwoHarmonicSeriesSpec,
    fourthOctaveHarmonics,
    standardHarmonicSeriesSpec,
    eighthOctaveHarmonics,
    thirdTritaveOddHarmonicsSpec,
    subharmonicSeriesSpec,
    superparticularSeriesSpec,
}
