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
import { SequenceType, XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from './types'

const standardHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initial,
    [ XenharmonicSeriesSpec.POWER ]: to.Power(0),
}

const sharedEdHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initial,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: INITIAL,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType.PARTIAL_PRODUCT,
    [ XenharmonicSeriesSpec.USE_BASE ]: true,
}

const edTwoHarmonicSeriesSpecs: XenharmonicSeriesSpecs = sharedEdHarmonicSeriesSpecs

const edThreeHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedEdHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.BASE ]: TRITAVE,
}

const edEulerHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedEdHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.BASE ]: E,
}

const thirdTritaveOddHarmonicsSpecs: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    [ XenharmonicSeriesSpec.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: to.Scalar(from.Cardinal(EVERY_OTHER)),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND,
}

const thirdTritaveOddHarmonicsWithStackedThirdsSpecs: XenharmonicSeriesSpecs = {
    ...thirdTritaveOddHarmonicsSpecs,
    [ XenharmonicSeriesSpec.STACK ]: [ INITIAL, INDEX_FOR_THIRDS ],
}

const thirdTritaveOddHarmonicsWithStackedFourthsSpecs: XenharmonicSeriesSpecs = {
    ...thirdTritaveOddHarmonicsSpecs,
    [ XenharmonicSeriesSpec.STACK ]: [ INITIAL, INDEX_FOR_FOURTHS ],
}

const thirdTritaveOddHarmonicsWithStackedFifthsSpecs: XenharmonicSeriesSpecs = {
    ...thirdTritaveOddHarmonicsSpecs,
    [ XenharmonicSeriesSpec.STACK ]: [ INITIAL, INDEX_FOR_FIFTHS ],
}

const fourthOctaveHarmonics: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: FOURTH_OCTAVE_HARMONICS_CONSTANT,
    [ XenharmonicSeriesSpec.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: FOURTH_OCTAVE_HARMONICS_UPPER_BOUND,
}

const eighthOctaveHarmonics: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND,
}

const subharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initial,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType.SEQUENCE,
}

const superparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...subharmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: true,
}

const duperparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...superparticularSeriesSpecs,
    [ XenharmonicSeriesSpec.PARTICULATE ]: DUPER_OR_DUB_PARTICULATE,
}

const subparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: true,
}

const dubparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...subparticularSeriesSpecs,
    [ XenharmonicSeriesSpec.PARTICULATE ]: DUPER_OR_DUB_PARTICULATE,
}

const fiveDenominatedHarmonicSeries: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: FIVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: to.Scalar(from.Fraction([
        to.Numerator(1),
        FIVE_DENOMINATOR,
    ])),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: to.Ordinal(from.Denominator(FIVE_DENOMINATOR)),
    [ XenharmonicSeriesSpec.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
}

const sevenDenominatedHarmonicSeries: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: SEVEN_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: to.Scalar(from.Fraction([
        to.Numerator(1),
        SEVEN_DENOMINATOR,
    ])),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: to.Ordinal(from.Denominator(SEVEN_DENOMINATOR)),
    [ XenharmonicSeriesSpec.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
}

const twelveDenominatedHarmonicSeries: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: TWELVE_DENOMINATED_HARMONIC_SERIES_CONSTANT,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: to.Scalar(from.Fraction([
        to.Numerator(1),
        TWELVE_DENOMINATOR,
    ])),
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: to.Ordinal(from.Denominator(TWELVE_DENOMINATOR)),
    [ XenharmonicSeriesSpec.SCALE_ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_SCALE_ITERATIONS_WHEN_PRESENT,
}

export {
    edEulerHarmonicSeriesSpecs,
    edThreeHarmonicSeriesSpecs,
    edTwoHarmonicSeriesSpecs,
    fourthOctaveHarmonics,
    standardHarmonicSeriesSpecs,
    eighthOctaveHarmonics,
    thirdTritaveOddHarmonicsSpecs,
    thirdTritaveOddHarmonicsWithStackedThirdsSpecs,
    thirdTritaveOddHarmonicsWithStackedFourthsSpecs,
    thirdTritaveOddHarmonicsWithStackedFifthsSpecs,
    subharmonicSeriesSpecs,
    superparticularSeriesSpecs,
    duperparticularSeriesSpecs,
    subparticularSeriesSpecs,
    dubparticularSeriesSpecs,
    fiveDenominatedHarmonicSeries,
    sevenDenominatedHarmonicSeries,
    twelveDenominatedHarmonicSeries,
}
