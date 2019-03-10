// tslint:disable max-file-line-count

import { E, EVERY_OTHER, from, INITIAL, to, TRITAVE } from '@musical-patterns/utilities'
import {
    DUPER_OR_DUB_PARTICULATE,
    EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND,
    FIVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    FIVE_DENOMINATOR,
    FOURTH_OCTAVE_HARMONICS_CONSTANT,
    FOURTH_OCTAVE_HARMONICS_UPPER_BOUND,
    INDEX_FOR_FIFTHS,
    INDEX_FOR_FOURTHS,
    INDEX_FOR_THIRDS,
    SEVEN_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    SEVEN_DENOMINATOR,
    THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND,
    TWELVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    TWELVE_DENOMINATOR,
    XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
} from './constants'
import { initial } from './initial'
import { SequenceType, XenharmonicSeriesProperty, XenharmonicSeriesSpec } from './types'

const standardHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesProperty.POWER ]: to.Power(0),
}

const sharedEdHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesProperty.LOWER_BOUND ]: INITIAL,
    [ XenharmonicSeriesProperty.SEQUENCE_TYPE ]: SequenceType.PARTIAL_PRODUCT,
    [ XenharmonicSeriesProperty.USE_BASE ]: true,
}

const edTwoHarmonicSeriesSpec: XenharmonicSeriesSpec = sharedEdHarmonicSeriesSpec

const edThreeHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedEdHarmonicSeriesSpec,
    [ XenharmonicSeriesProperty.BASE ]: TRITAVE,
}

const edEulerHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedEdHarmonicSeriesSpec,
    [ XenharmonicSeriesProperty.BASE ]: E,
}

const thirdTritaveOddHarmonicsSpec: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesProperty.CONSTANT ]: THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    [ XenharmonicSeriesProperty.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
    [ XenharmonicSeriesProperty.TERM_COEFFICIENT ]: to.Scalar(from.Cardinal(EVERY_OTHER)),
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND,
}

const thirdTritaveOddHarmonicsWithStackedThirdsSpec: XenharmonicSeriesSpec = {
    ...thirdTritaveOddHarmonicsSpec,
    [ XenharmonicSeriesProperty.STACK ]: [ INITIAL, INDEX_FOR_THIRDS ],
}

const thirdTritaveOddHarmonicsWithStackedFourthsSpec: XenharmonicSeriesSpec = {
    ...thirdTritaveOddHarmonicsSpec,
    [ XenharmonicSeriesProperty.STACK ]: [ INITIAL, INDEX_FOR_FOURTHS ],
}

const thirdTritaveOddHarmonicsWithStackedFifthsSpec: XenharmonicSeriesSpec = {
    ...thirdTritaveOddHarmonicsSpec,
    [ XenharmonicSeriesProperty.STACK ]: [ INITIAL, INDEX_FOR_FIFTHS ],
}

const fourthOctaveHarmonics: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesProperty.CONSTANT ]: FOURTH_OCTAVE_HARMONICS_CONSTANT,
    [ XenharmonicSeriesProperty.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: FOURTH_OCTAVE_HARMONICS_UPPER_BOUND,
}

const eighthOctaveHarmonics: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesProperty.CONSTANT ]: EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND,
}

const subharmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesProperty.SEQUENCE_TYPE ]: SequenceType.SEQUENCE,
}

const superparticularSeriesSpec: XenharmonicSeriesSpec = {
    ...subharmonicSeriesSpec,
    [ XenharmonicSeriesProperty.USE_PARTICULATE ]: true,
}

const duperparticularSeriesSpec: XenharmonicSeriesSpec = {
    ...superparticularSeriesSpec,
    [ XenharmonicSeriesProperty.PARTICULATE ]: DUPER_OR_DUB_PARTICULATE,
}

const subparticularSeriesSpec: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesProperty.USE_PARTICULATE ]: true,
}

const dubparticularSeriesSpec: XenharmonicSeriesSpec = {
    ...subparticularSeriesSpec,
    [ XenharmonicSeriesProperty.PARTICULATE ]: DUPER_OR_DUB_PARTICULATE,
}

const fiveDenominatedHarmonicSeries: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesProperty.CONSTANT ]: FIVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    [ XenharmonicSeriesProperty.TERM_COEFFICIENT ]: to.Scalar(from.Fraction([
        to.Numerator(1),
        FIVE_DENOMINATOR,
    ])),
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: to.Ordinal(from.Denominator(FIVE_DENOMINATOR)),
    [ XenharmonicSeriesProperty.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
}

const sevenDenominatedHarmonicSeries: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesProperty.CONSTANT ]: SEVEN_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    [ XenharmonicSeriesProperty.TERM_COEFFICIENT ]: to.Scalar(from.Fraction([
        to.Numerator(1),
        SEVEN_DENOMINATOR,
    ])),
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: to.Ordinal(from.Denominator(SEVEN_DENOMINATOR)),
    [ XenharmonicSeriesProperty.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
}

const twelveDenominatedHarmonicSeries: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesProperty.CONSTANT ]: TWELVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    [ XenharmonicSeriesProperty.TERM_COEFFICIENT ]: to.Scalar(from.Fraction([
        to.Numerator(1),
        TWELVE_DENOMINATOR,
    ])),
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: to.Ordinal(from.Denominator(TWELVE_DENOMINATOR)),
    [ XenharmonicSeriesProperty.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
}

export {
    edEulerHarmonicSeriesSpec,
    edThreeHarmonicSeriesSpec,
    edTwoHarmonicSeriesSpec,
    fourthOctaveHarmonics,
    standardHarmonicSeriesSpec,
    eighthOctaveHarmonics,
    thirdTritaveOddHarmonicsSpec,
    thirdTritaveOddHarmonicsWithStackedThirdsSpec,
    thirdTritaveOddHarmonicsWithStackedFourthsSpec,
    thirdTritaveOddHarmonicsWithStackedFifthsSpec,
    subharmonicSeriesSpec,
    superparticularSeriesSpec,
    duperparticularSeriesSpec,
    subparticularSeriesSpec,
    dubparticularSeriesSpec,
    fiveDenominatedHarmonicSeries,
    sevenDenominatedHarmonicSeries,
    twelveDenominatedHarmonicSeries,
}
