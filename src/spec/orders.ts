import { XenharmonicSeriesPreset, XenharmonicSeriesSpec } from './types'

const specsOrder: XenharmonicSeriesSpec[] = [
    XenharmonicSeriesSpec.SEQUENCE_TYPE,
    XenharmonicSeriesSpec.HOLD_ROOT,
    XenharmonicSeriesSpec.EXPONENT,
    XenharmonicSeriesSpec.LOWER_BOUND,
    XenharmonicSeriesSpec.UPPER_BOUND,
    XenharmonicSeriesSpec.USE_LOGARITHM,
    XenharmonicSeriesSpec.LOGARITHM,
    XenharmonicSeriesSpec.DESCENDING,
    XenharmonicSeriesSpec.CONSTANT,
    XenharmonicSeriesSpec.GROUND,
    XenharmonicSeriesSpec.TERM_COEFFICIENT,
    XenharmonicSeriesSpec.ITERATIONS,
    XenharmonicSeriesSpec.STACK,
    XenharmonicSeriesSpec.USE_PARTICULATE,
    XenharmonicSeriesSpec.PARTICULATE,
]

const presetsOrder: XenharmonicSeriesPreset[] = [
    XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES,
    XenharmonicSeriesPreset.MATHARMONIC_SERIES,
    XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES,
    XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES,
    XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS,
    XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_THIRDS,
    XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FOURTHS,
    XenharmonicSeriesPreset.THIRD_TRITAVE_ODD_HARMONICS_WITH_STACKED_FIFTHS,
    XenharmonicSeriesPreset.EIGHTH_OCTAVE_HARMONICS,
    XenharmonicSeriesPreset.FOURTH_OCTAVE_HARMONICS,
    XenharmonicSeriesPreset.SUBHARMONIC_SERIES,
    XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES,
    XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES,
    XenharmonicSeriesPreset.SUBPARTICULAR_SERIES,
    XenharmonicSeriesPreset.DUBPARTICULAR_SERIES,
    XenharmonicSeriesPreset.FIVE_DENOMINATED_HARMONIC_SERIES,
    XenharmonicSeriesPreset.SEVEN_DENOMINATED_HARMONIC_SERIES,
    XenharmonicSeriesPreset.TWELVE_DENOMINATED_HARMONIC_SERIES,
]

export {
    specsOrder,
    presetsOrder,
}
