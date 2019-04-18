import { INITIAL } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import {
    EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND,
    FOURTH_OCTAVE_HARMONICS_CONSTANT,
    FOURTH_OCTAVE_HARMONICS_UPPER_BOUND,
    INDEX_FOR_FIFTHS,
    INDEX_FOR_FOURTHS,
    INDEX_FOR_THIRDS,
    THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    THIRD_TRITAVE_ODD_HARMONICS_TERM_COEFFICIENT,
    THIRD_TRITAVE_ODD_HARMONICS_UPPER_BOUND,
    XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT,
} from './constants'
import { standardHarmonicSeriesSpecs } from './standard'

const thirdTritaveOddHarmonicsSpecs: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: THIRD_TRITAVE_ODD_HARMONICS_CONSTANT,
    [ XenharmonicSeriesSpec.ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: THIRD_TRITAVE_ODD_HARMONICS_TERM_COEFFICIENT,
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
    [ XenharmonicSeriesSpec.ITERATIONS ]: XENHARMONIC_SERIES_STANDARD_ITERATIONS_WHEN_PRESENT,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: FOURTH_OCTAVE_HARMONICS_UPPER_BOUND,
}

const eighthOctaveHarmonics: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.CONSTANT ]: EIGHTH_OCTAVE_HARMONICS_CONSTANT,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: EIGHTH_OCTAVE_HARMONICS_UPPER_BOUND,
}

export {
    fourthOctaveHarmonics,
    eighthOctaveHarmonics,
    thirdTritaveOddHarmonicsSpecs,
    thirdTritaveOddHarmonicsWithStackedThirdsSpecs,
    thirdTritaveOddHarmonicsWithStackedFourthsSpecs,
    thirdTritaveOddHarmonicsWithStackedFifthsSpecs,
}
