import { E, EVERY_OTHER, from, to, TRITAVE } from '@musical-patterns/utilities'
import {
    DUPER_OR_DUB_PARTICULATE,
    EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND,
    FOURTH_OCTAVE_HARMONICS_CONSTANT,
    FOURTH_OCTAVE_HARMONICS_UPPER_BOUND,
    THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND,
    XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
} from './constants'
import { initial } from './initial'
import { SequenceType, XenharmonicSeriesSpec, XenharmonicSeriesSpecProperty } from './types'

const standardHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesSpecProperty.POWER ]: to.Power(0),
}

const sharedEdHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesSpecProperty.LOWER_BOUND ]: to.Ordinal(0),
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
    [ XenharmonicSeriesSpecProperty.BASE ]: E,
}

const thirdTritaveOddHarmonicsSpec: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    [ XenharmonicSeriesSpecProperty.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
    [ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]: to.Scalar(from.Cardinal(EVERY_OTHER)),
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND,
}

const fourthOctaveHarmonics: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: FOURTH_OCTAVE_HARMONICS_CONSTANT,
    [ XenharmonicSeriesSpecProperty.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: FOURTH_OCTAVE_HARMONICS_UPPER_BOUND,
}

const eighthOctaveHarmonics: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND,
}

const subharmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: SequenceType.SEQUENCE,
}

const superparticularSeriesSpec: XenharmonicSeriesSpec = {
    ...subharmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.USE_PARTICULATE ]: true,
}

const duperparticularSeriesSpec: XenharmonicSeriesSpec = {
    ...superparticularSeriesSpec,
    [ XenharmonicSeriesSpecProperty.PARTICULATE ]: DUPER_OR_DUB_PARTICULATE,
}

const subparticularSeriesSpec: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.USE_PARTICULATE ]: true,
}

const dubparticularSeriesSpec: XenharmonicSeriesSpec = {
    ...subparticularSeriesSpec,
    [ XenharmonicSeriesSpecProperty.PARTICULATE ]: DUPER_OR_DUB_PARTICULATE,
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
    duperparticularSeriesSpec,
    subparticularSeriesSpec,
    dubparticularSeriesSpec,
}
