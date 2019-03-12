import {
    Configurations,
    OptionedConfiguration,
    RangedConfiguration,
    Specs,
    ToggledConfiguration,
} from '@musical-patterns/pattern'
import { Base, Cardinal, Ordinal, Power, Scalar, Translation } from '@musical-patterns/utilities'

enum XenharmonicSeriesSpec {
    BASE = 'base',
    CONSTANT = 'constant',
    GROUND = 'ground',
    HOLD_ROOT = 'holdRoot',
    SCALE_ITERATIONS = 'iterations',
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

enum SequenceType {
    PARTIAL_SUM = 'partial sum',
    PARTIAL_PRODUCT = 'partial product',
    SEQUENCE = 'sequence',
}

interface XenharmonicSeriesSpecs extends Specs {
    [ XenharmonicSeriesSpec.BASE ]: Base,
    [ XenharmonicSeriesSpec.CONSTANT ]: Translation,
    [ XenharmonicSeriesSpec.DESCENDING ]: boolean,
    [ XenharmonicSeriesSpec.GROUND ]: boolean,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: boolean,
    [ XenharmonicSeriesSpec.SCALE_ITERATIONS ]: Cardinal,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: Ordinal,
    [ XenharmonicSeriesSpec.PARTICULATE ]: Translation,
    [ XenharmonicSeriesSpec.POWER ]: Power,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType,
    [ XenharmonicSeriesSpec.STACK ]: Ordinal[],
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: Scalar,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: Ordinal,
    [ XenharmonicSeriesSpec.USE_BASE ]: boolean,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: boolean,
}

interface XenharmonicSeriesConfigurations extends Configurations<XenharmonicSeriesSpecs> {
    [ XenharmonicSeriesSpec.BASE ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.CONSTANT ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.DESCENDING ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.GROUND ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.SCALE_ITERATIONS ]: RangedConfiguration,
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
    SequenceType,
    XenharmonicSeriesSpecs,
    XenharmonicSeriesConfigurations,
    XenharmonicSeriesSpec,
    XenharmonicSeriesPreset,
}
