// tslint:disable max-file-line-count

import {
    Configurations,
    OptionedConfiguration,
    RangedConfiguration,
    Specs,
    ToggledConfiguration,
} from '@musical-patterns/spec'
import {
    Cardinal,
    Exponent,
    Logarithm,
    Maybe,
    Ordinal,
    Rational,
    Remaindee,
    Scalar,
} from '@musical-patterns/utilities'
import { Stack, XenharmonicSequence } from '../nominals'
import { FunctionType, NumberSequence } from '../types'

enum XenharmonicSeriesPreset {
    MATHARMONIC_SERIES = 'matharmonicSeries',
    EMULATORY_MATHARMONIC_SERIES = 'emulatoryMatharmonicSeries',

    EDHARMONIC_SERIES = 'edharmonicSeries',
    ED_THREE_HARMONIC_SERIES = 'edThreeHarmonicSeries',
    EMULATORY_EDHARMONIC_SERIES = 'emulatoryEdharmonicSeries',

    LN_OF_TWO_POWHARMONIC_SERIES = 'lnOfTwoPowharmonicSeries',
    LOG_BASE_THREE_OF_TWO_POWHARMONIC_SERIES = 'logBaseThreeOfTwoPowharmonicSeries',
    LOG_BASE_TWO_OF_THREE_POWHARMONIC_SERIES = 'logBaseTwoOfThreePowharmonicSeries',

    LESSER_PHI_POWHARMONIC_SERIES = 'lesserPhiPowharmonicSeries',
    GREATER_PHI_POWHARMONIC_SERIES = 'greaterPhiPowharmonicSeries',

    LOGHARMONIC_SERIES = 'logharmonicSeries',
    TWO_LOGHARMONIC_SERIES = 'twoLogharmonicSeries',
    THREE_LOGHARMONIC_SERIES = 'threeLogharmonicSeries',
    PHI_LOGHARMONIC_SERIES = 'phiLogharmonicSeries',

    THIRD_TRITAVE_ODD_HARMONICS = 'thirdTritaveOddHarmonics',
    THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS = 'thirdTritaveOddHarmonicsWithStackedThirds',
    THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FOURTHS = 'thirdTritaveOddHarmonicsWithStackedFourths',
    THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FIFTHS = 'thirdTritaveOddHarmonicsWithStackedFifths',

    EIGHTH_OCTAVE_HARMONICS = 'eighthOctaveHarmonics',
    FOURTH_OCTAVE_HARMONICS = 'fourthOctaveHarmonics',

    FIVE_DENOMINATED_HARMONIC_SERIES = 'fiveDenominatedHarmonicSeries',
    SEVEN_DENOMINATED_HARMONIC_SERIES = 'sevenDenominatedHarmonicSeries',
    TWELVE_DENOMINATED_HARMONIC_SERIES = 'twelveDenominatedHarmonicSeries',

    HARMONIC_SERIES = 'harmonicSeries',
    SUBHARMONIC_SERIES = 'subharmonicSeries',

    SUPERPARTICULAR_SERIES = 'superparticularSeries',
    SUBSUPERPARTICULAR_SERIES = 'subsuperparticularSeries',
    SUPERBIPARTICULAR_SERIES = 'superbiparticularSeries',
    DOUBLE_SUPERPARTICULAR_SERIES = 'doubleSuperparticularSeries',
    DOUBLE_SUPERBIPARTICULAR_SERIES = 'doubleSuperbiparticularSeries',

    DUPERPARTICULAR_SERIES = 'duperparticularSeries',
    DUBDUPERPARTICULAR_SERIES = 'dubduperparticularSeries',
    TRUPERPARTICULAR_SERIES = 'truperparticularSeries',
    TRUBTRUPERPARTICULAR_SERIES = 'trubtruperparticularSeries',

    METALLIC_HARMONIC_SERIES = 'metallicHarmonicSeries',

    PRIME_HARMONIC_SERIES = 'primeHarmonicSeries',
}

enum XenharmonicSeriesSpec {
    DESCENDING = 'descending',
    HOLD_ROOT = 'holdRoot',
    ITERATIONS = 'iterations',
    STACK = 'stack',
    SORTED_OCTAVE_REDUCED = 'sortedOctaveReduced',

    NUMBER_SEQUENCE = 'numberSequence',
    SUPERPARTICULAR_DIV = 'superparticularDiv',
    SUPERPARTICULAR_MOD = 'superparticularMod',

    RECIPROCATE = 'reciprocate',

    LOWER_BOUND = 'lowerBound',
    UPPER_BOUND = 'upperBound',

    COEFFICIENT = 'coefficient',

    SIEVE = 'sieve',

    FUNCTION_TYPE = 'functionType',
    EXPONENTIAL_BASE = 'exponentialBase',
    LOGARITHMIC_BASE = 'logarithmicBase',
    POWER = 'power',

    INITIAL_VALUE_OVERRIDE = 'initialValueOverride',
}

interface XenharmonicSeriesSpecs extends Specs {
    [ XenharmonicSeriesSpec.DESCENDING ]: boolean,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: boolean,
    [ XenharmonicSeriesSpec.ITERATIONS ]: Cardinal<XenharmonicSequence[]>,
    [ XenharmonicSeriesSpec.STACK ]: Array<Ordinal<Stack[]>>,
    [ XenharmonicSeriesSpec.SORTED_OCTAVE_REDUCED ]: boolean,

    [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]: NumberSequence,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: Maybe<number>,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: Maybe<number>,

    [ XenharmonicSeriesSpec.RECIPROCATE ]: boolean,

    [ XenharmonicSeriesSpec.LOWER_BOUND ]: Ordinal,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: Ordinal,

    [ XenharmonicSeriesSpec.COEFFICIENT ]: Rational,

    [ XenharmonicSeriesSpec.SIEVE ]: Maybe<Remaindee<Ordinal>>,

    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: Maybe<FunctionType>,
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: Maybe<Logarithm>,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: Maybe<Logarithm>,
    [ XenharmonicSeriesSpec.POWER ]: Maybe<Exponent>,

    [ XenharmonicSeriesSpec.INITIAL_VALUE_OVERRIDE ]: Maybe<Scalar>,
}

interface XenharmonicSeriesConfigurations extends Configurations<XenharmonicSeriesSpecs> {
    [ XenharmonicSeriesSpec.DESCENDING ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: ToggledConfiguration,
    [ XenharmonicSeriesSpec.ITERATIONS ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.STACK ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.SORTED_OCTAVE_REDUCED ]: ToggledConfiguration,

    [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]: OptionedConfiguration,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: RangedConfiguration,

    [ XenharmonicSeriesSpec.RECIPROCATE ]: ToggledConfiguration,

    [ XenharmonicSeriesSpec.LOWER_BOUND ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: RangedConfiguration,

    [ XenharmonicSeriesSpec.COEFFICIENT ]: RangedConfiguration,

    [ XenharmonicSeriesSpec.SIEVE ]: RangedConfiguration,

    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: OptionedConfiguration,
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: RangedConfiguration,
    [ XenharmonicSeriesSpec.POWER ]: RangedConfiguration,

    [ XenharmonicSeriesSpec.INITIAL_VALUE_OVERRIDE ]: RangedConfiguration,
}

export {
    XenharmonicSeriesSpecs,
    XenharmonicSeriesConfigurations,
    XenharmonicSeriesSpec,
    XenharmonicSeriesPreset,
}
