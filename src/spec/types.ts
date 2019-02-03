import {
    OptionedSpecPropertyAttributes,
    RangedSpecPropertyAttributes,
    Spec,
    SpecAttributes,
    ToggledSpecPropertyAttributes,
} from '@musical-patterns/pattern'
import { Base, Count, Index, Offset, Power, Scalar } from '@musical-patterns/utilities'

enum XenharmonicSeriesSpecProperty {
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
    EIGHTH_OCTAVE_HARMONICS = 'eighthOctaveHarmonics',
    FOURTH_OCTAVE_HARMONICS = 'fourthOctaveHarmonics',
    SUBHARMONIC_SERIES = 'subharmonicSeries',
    SUPERPARTICULAR_SERIES = 'superparticularSeries',
    DUPERPARTICULAR_SERIES = 'duperparticularSeries',
    SUBPARTICULAR_SERIES = 'subparticularSeries',
    DUBPARTICULAR_SERIES = 'dubparticularSeries',
}

enum SequenceType {
    PARTIAL_SUM = 'partial sum',
    PARTIAL_PRODUCT = 'partial product',
    SEQUENCE = 'sequence',
}

interface XenharmonicSeriesSpec extends Spec {
    [ XenharmonicSeriesSpecProperty.BASE ]: Base,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: number,
    [ XenharmonicSeriesSpecProperty.DESCENDING ]: boolean,
    [ XenharmonicSeriesSpecProperty.GROUND ]: boolean,
    [ XenharmonicSeriesSpecProperty.HOLD_ROOT ]: boolean,
    [ XenharmonicSeriesSpecProperty.SCALE_ITERATIONS ]: Count,
    [ XenharmonicSeriesSpecProperty.LOWER_BOUND ]: Index,
    [ XenharmonicSeriesSpecProperty.PARTICULATE ]: Offset,
    [ XenharmonicSeriesSpecProperty.POWER ]: Power,
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: SequenceType,
    [ XenharmonicSeriesSpecProperty.STACK ]: Index[],
    [ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]: Scalar,
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: Index,
    [ XenharmonicSeriesSpecProperty.USE_BASE ]: boolean,
    [ XenharmonicSeriesSpecProperty.USE_PARTICULATE ]: boolean,
}

interface XenharmonicSeriesSpecAttributes extends SpecAttributes {
    [ XenharmonicSeriesSpecProperty.BASE ]: RangedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: RangedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.DESCENDING ]: ToggledSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.GROUND ]: ToggledSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.HOLD_ROOT ]: ToggledSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.SCALE_ITERATIONS ]: RangedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.LOWER_BOUND ]: RangedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.PARTICULATE ]: RangedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.POWER ]: RangedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: OptionedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.STACK ]: RangedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]: RangedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: RangedSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.USE_BASE ]: ToggledSpecPropertyAttributes,
    [ XenharmonicSeriesSpecProperty.USE_PARTICULATE ]: ToggledSpecPropertyAttributes,
}

export {
    SequenceType,
    XenharmonicSeriesSpec,
    XenharmonicSeriesSpecAttributes,
    XenharmonicSeriesSpecProperty,
    XenharmonicSeriesPreset,
}
