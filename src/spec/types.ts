import {
    Configurations,
    OptionedConfiguration,
    RangedConfiguration,
    StandardSpecs,
    ToggledConfiguration,
} from '@musical-patterns/spec'
import { Base, Cardinal, Frequency, Ordinal, Power, Scalar, Translation } from '@musical-patterns/utilities'
import { PartialSumOrProduct, Term } from '../nominals'
import { Particulate, SequenceType } from '../types'

enum XenharmonicSeriesSpec {
    BASE = 'base',
    CONSTANT = 'constant',
    GROUND = 'ground',
    HOLD_ROOT = 'holdRoot',
    ITERATIONS = 'iterations',
    LOWER_BOUND = 'lowerBound',
    PARTICULATE = 'particulate',
    POWER = 'power',
    SEQUENCE_TYPE = 'sequenceType',
    STACK = 'stack',
    TERM_COEFFICIENT = 'termCoefficient',
    UPPER_BOUND = 'upperBound',
    USE_BASE = 'useBase',
    USE_PARTICULATE = 'useParticulate',
    DESCENDING = 'descending',
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

interface XenharmonicSeriesSpecs extends StandardSpecs {
    [ XenharmonicSeriesSpec.BASE ]: Base<Frequency>,
    [ XenharmonicSeriesSpec.CONSTANT ]: Translation<PartialSumOrProduct>,
    [ XenharmonicSeriesSpec.DESCENDING ]: boolean,
    [ XenharmonicSeriesSpec.GROUND ]: boolean,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: boolean,
    [ XenharmonicSeriesSpec.ITERATIONS ]: Cardinal,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: Ordinal<PartialSumOrProduct>,
    [ XenharmonicSeriesSpec.PARTICULATE ]: Particulate,
    [ XenharmonicSeriesSpec.POWER ]: Power<Ordinal>,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType,
    [ XenharmonicSeriesSpec.STACK ]: Ordinal[],
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: Scalar<Term>,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: Ordinal<PartialSumOrProduct>,
    [ XenharmonicSeriesSpec.USE_BASE ]: boolean,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: boolean,
}

interface XenharmonicSeriesConfigurations extends Configurations<XenharmonicSeriesSpecs> {
    [ XenharmonicSeriesSpec.BASE ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.CONSTANT ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.DESCENDING ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.GROUND ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.ITERATIONS ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.PARTICULATE ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.POWER ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: OptionedConfiguration,
    [ XenharmonicSeriesSpec.STACK ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.USE_BASE ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: ToggledConfiguration,
}

export {
    XenharmonicSeriesSpecs,
    XenharmonicSeriesConfigurations,
    XenharmonicSeriesSpec,
    XenharmonicSeriesPreset,
}
