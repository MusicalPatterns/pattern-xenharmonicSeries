import {
    Configurations,
    OptionedConfiguration,
    RangedConfiguration,
    Specs,
    ToggledConfiguration,
} from '@musical-patterns/spec'
import { Cardinal, Exponent, Frequency, Logarithm, Ordinal, Scalar, Translation } from '@musical-patterns/utilities'
import { XenharmonicSequence } from '../material'
import { PartialSumOrProduct, Stack, Term } from '../nominals'
import { Particulate, SequenceType } from '../types'

enum XenharmonicSeriesSpec {
    DESCENDING = 'descending',
    EXPONENT = 'exponent',
    CONSTANT = 'constant',
    GROUND = 'ground',
    HOLD_ROOT = 'holdRoot',
    ITERATIONS = 'iterations',
    LOGARITHM = 'logarithm',
    LOWER_BOUND = 'lowerBound',
    PARTICULATE = 'particulate',
    SEQUENCE_TYPE = 'sequenceType',
    STACK = 'stack',
    TERM_COEFFICIENT = 'termCoefficient',
    UPPER_BOUND = 'upperBound',
    USE_LOGARITHM = 'useLogarithm',
    USE_PARTICULATE = 'useParticulate',
}

enum XenharmonicSeriesPreset {
    STANDARD_HARMONIC_SERIES = 'standardHarmonicSeries',
    MATHARMONIC_SERIES = 'matharmonicSeries',
    ED_TWO_HARMONIC_SERIES = 'edTwoHarmonicSeries',
    ED_THREE_HARMONIC_SERIES = 'edThreeHarmonicSeries',
    ED_EULER_HARMONIC_SERIES = 'edEulerHarmonicSeries',
    THIRD_TRITAVE_ODD_HARMONICS = 'thirdTritaveOddHarmonics',
    THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS = 'thirdTritaveOddHarmonicsWithStackedThirds',
    THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FOURTHS = 'thirdTritaveOddHarmonicsWithStackedFourths',
    THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FIFTHS = 'thirdTritaveOddHarmonicsWithStackedFifths',
    EIGHTH_OCTAVE_HARMONICS = 'eighthOctaveHarmonics',
    FOURTH_OCTAVE_HARMONICS = 'fourthOctaveHarmonics',
    SUBHARMONIC_SERIES = 'subharmonicSeries',
    SUPERPARTICULAR_SERIES = 'superparticularSeries',
    DUPERPARTICULAR_SERIES = 'duperparticularSeries',
    SUBPARTICULAR_SERIES = 'subparticularSeries',
    DUBPARTICULAR_SERIES = 'dubparticularSeries',
    FIVE_DENOMINATED_HARMONIC_SERIES = 'fiveDenominatedHarmonicSeries',
    SEVEN_DENOMINATED_HARMONIC_SERIES = 'sevenDenominatedHarmonicSeries',
    TWELVE_DENOMINATED_HARMONIC_SERIES = 'twelveDenominatedHarmonicSeries',
}

interface XenharmonicSeriesSpecs extends Specs {
    [ XenharmonicSeriesSpec.LOGARITHM ]: Logarithm<Frequency>,
    [ XenharmonicSeriesSpec.CONSTANT ]: Translation<PartialSumOrProduct>,
    [ XenharmonicSeriesSpec.DESCENDING ]: boolean,
    [ XenharmonicSeriesSpec.GROUND ]: boolean,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: boolean,
    [ XenharmonicSeriesSpec.ITERATIONS ]: Cardinal<XenharmonicSequence[]>,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: Ordinal<XenharmonicSequence>,
    [ XenharmonicSeriesSpec.PARTICULATE ]: Particulate,
    [ XenharmonicSeriesSpec.EXPONENT ]: Exponent,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType,
    [ XenharmonicSeriesSpec.STACK ]: Array<Ordinal<Stack[]>>,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: Scalar<Term>,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: Ordinal<XenharmonicSequence>,
    [ XenharmonicSeriesSpec.USE_LOGARITHM ]: boolean,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: boolean,
}

interface XenharmonicSeriesConfigurations extends Configurations<XenharmonicSeriesSpecs> {
    [ XenharmonicSeriesSpec.LOGARITHM ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.CONSTANT ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.DESCENDING ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.GROUND ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.ITERATIONS ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.PARTICULATE ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.EXPONENT ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: OptionedConfiguration,
    [ XenharmonicSeriesSpec.STACK ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.USE_LOGARITHM ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: ToggledConfiguration,
}

export {
    XenharmonicSeriesSpecs,
    XenharmonicSeriesConfigurations,
    XenharmonicSeriesSpec,
    XenharmonicSeriesPreset,
}
