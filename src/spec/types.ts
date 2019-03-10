import {
    Attributes,
    OptionedPropertyAttributes,
    RangedPropertyAttributes,
    Spec,
    ToggledPropertyAttributes,
} from '@musical-patterns/pattern'
import { Base, Cardinal, Ordinal, Power, Scalar, Translation } from '@musical-patterns/utilities'

enum XenharmonicSeriesProperty {
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

interface XenharmonicSeriesSpec extends Spec {
    [ XenharmonicSeriesProperty.BASE ]: Base,
    [ XenharmonicSeriesProperty.CONSTANT ]: Translation,
    [ XenharmonicSeriesProperty.DESCENDING ]: boolean,
    [ XenharmonicSeriesProperty.GROUND ]: boolean,
    [ XenharmonicSeriesProperty.HOLD_ROOT ]: boolean,
    [ XenharmonicSeriesProperty.SCALE_ITERATIONS ]: Cardinal,
    [ XenharmonicSeriesProperty.LOWER_BOUND ]: Ordinal,
    [ XenharmonicSeriesProperty.PARTICULATE ]: Translation,
    [ XenharmonicSeriesProperty.POWER ]: Power,
    [ XenharmonicSeriesProperty.SEQUENCE_TYPE ]: SequenceType,
    [ XenharmonicSeriesProperty.STACK ]: Ordinal[],
    [ XenharmonicSeriesProperty.TERM_COEFFICIENT ]: Scalar,
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: Ordinal,
    [ XenharmonicSeriesProperty.USE_BASE ]: boolean,
    [ XenharmonicSeriesProperty.USE_PARTICULATE ]: boolean,
}

interface XenharmonicSeriesAttributes extends Attributes<XenharmonicSeriesSpec> {
    [ XenharmonicSeriesProperty.BASE ]: RangedPropertyAttributes,
    [ XenharmonicSeriesProperty.CONSTANT ]: RangedPropertyAttributes,
    [ XenharmonicSeriesProperty.DESCENDING ]: ToggledPropertyAttributes,
    [ XenharmonicSeriesProperty.GROUND ]: ToggledPropertyAttributes,
    [ XenharmonicSeriesProperty.HOLD_ROOT ]: ToggledPropertyAttributes,
    [ XenharmonicSeriesProperty.SCALE_ITERATIONS ]: RangedPropertyAttributes,
    [ XenharmonicSeriesProperty.LOWER_BOUND ]: RangedPropertyAttributes,
    [ XenharmonicSeriesProperty.PARTICULATE ]: RangedPropertyAttributes,
    [ XenharmonicSeriesProperty.POWER ]: RangedPropertyAttributes,
    [ XenharmonicSeriesProperty.SEQUENCE_TYPE ]: OptionedPropertyAttributes,
    [ XenharmonicSeriesProperty.STACK ]: RangedPropertyAttributes,
    [ XenharmonicSeriesProperty.TERM_COEFFICIENT ]: RangedPropertyAttributes,
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: RangedPropertyAttributes,
    [ XenharmonicSeriesProperty.USE_BASE ]: ToggledPropertyAttributes,
    [ XenharmonicSeriesProperty.USE_PARTICULATE ]: ToggledPropertyAttributes,
}

export {
    SequenceType,
    XenharmonicSeriesSpec,
    XenharmonicSeriesAttributes,
    XenharmonicSeriesProperty,
    XenharmonicSeriesPreset,
}
