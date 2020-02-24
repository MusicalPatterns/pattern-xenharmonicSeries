import { XenharmonicSeriesPreset, XenharmonicSeriesSpec } from './types'

const specsOrder: XenharmonicSeriesSpec[] = [
    XenharmonicSeriesSpec.DESCENDING,
    XenharmonicSeriesSpec.HOLD_ROOT,
    XenharmonicSeriesSpec.ITERATIONS,
    XenharmonicSeriesSpec.STACK,
    XenharmonicSeriesSpec.SORTED_OCTAVE_REDUCED,

    XenharmonicSeriesSpec.NUMBER_SEQUENCE,
    XenharmonicSeriesSpec.SUPERPARTICULAR_DIV,
    XenharmonicSeriesSpec.SUPERPARTICULAR_MOD,

    XenharmonicSeriesSpec.RECIPROCATE,

    XenharmonicSeriesSpec.LOWER_BOUND,
    XenharmonicSeriesSpec.UPPER_BOUND,

    XenharmonicSeriesSpec.COEFFICIENT,

    XenharmonicSeriesSpec.SIEVE,

    XenharmonicSeriesSpec.FUNCTION_TYPE,
    XenharmonicSeriesSpec.EXPONENTIAL_BASE,
    XenharmonicSeriesSpec.LOGARITHMIC_BASE,
    XenharmonicSeriesSpec.POWER,

    XenharmonicSeriesSpec.INITIAL_VALUE_OVERRIDE,
]

const presetsOrder: XenharmonicSeriesPreset[] = [
    XenharmonicSeriesPreset.MATHARMONIC_SERIES,
    XenharmonicSeriesPreset.EMULATORY_MATHARMONIC_SERIES,

    XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES,
    XenharmonicSeriesPreset.EDHARMONIC_SERIES,
    XenharmonicSeriesPreset.EMULATORY_EDHARMONIC_SERIES,

    XenharmonicSeriesPreset.LN_OF_TWO_POWHARMONIC_SERIES,
    XenharmonicSeriesPreset.LOG_BASE_THREE_OF_TWO_POWHARMONIC_SERIES,
    XenharmonicSeriesPreset.LOG_BASE_TWO_OF_THREE_POWHARMONIC_SERIES,

    XenharmonicSeriesPreset.LESSER_PHI_POWHARMONIC_SERIES,
    XenharmonicSeriesPreset.GREATER_PHI_POWHARMONIC_SERIES,

    XenharmonicSeriesPreset.LOGHARMONIC_SERIES,
    XenharmonicSeriesPreset.TWO_LOGHARMONIC_SERIES,
    XenharmonicSeriesPreset.THREE_LOGHARMONIC_SERIES,
    XenharmonicSeriesPreset.PHI_LOGHARMONIC_SERIES,

    XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS,
    XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS,
    XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FOURTHS,
    XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FIFTHS,

    XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS,
    XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS,

    XenharmonicSeriesPreset.FIVE_DENOMINATED_HARMONIC_SERIES,
    XenharmonicSeriesPreset.SEVEN_DENOMINATED_HARMONIC_SERIES,
    XenharmonicSeriesPreset.TWELVE_DENOMINATED_HARMONIC_SERIES,

    XenharmonicSeriesPreset.HARMONIC_SERIES,
    XenharmonicSeriesPreset.SUBHARMONIC_SERIES,

    XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES,
    XenharmonicSeriesPreset.SUBSUPERPARTICULAR_SERIES,

    XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES,
    XenharmonicSeriesPreset.DUBDUPERPARTICULAR_SERIES,

    XenharmonicSeriesPreset.METALLIC_HARMONIC_SERIES,

    XenharmonicSeriesPreset.PRIME_HARMONIC_SERIES,
]

export {
    specsOrder,
    presetsOrder,
}
