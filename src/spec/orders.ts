import { XenharmonicSeriesPreset, XenharmonicSeriesProperty } from './types'

const specControlsOrder: XenharmonicSeriesProperty[] = [
    XenharmonicSeriesProperty.SEQUENCE_TYPE,
    XenharmonicSeriesProperty.HOLD_ROOT,
    XenharmonicSeriesProperty.POWER,
    XenharmonicSeriesProperty.LOWER_BOUND,
    XenharmonicSeriesProperty.UPPER_BOUND,
    XenharmonicSeriesProperty.USE_BASE,
    XenharmonicSeriesProperty.BASE,
    XenharmonicSeriesProperty.DESCENDING,
    XenharmonicSeriesProperty.CONSTANT,
    XenharmonicSeriesProperty.GROUND,
    XenharmonicSeriesProperty.TERM_COEFFICIENT,
    XenharmonicSeriesProperty.SCALE_ITERATIONS,
    XenharmonicSeriesProperty.STACK,
    XenharmonicSeriesProperty.USE_PARTICULATE,
    XenharmonicSeriesProperty.PARTICULATE,
]

const presetsOrder: XenharmonicSeriesPreset[] = [
    XenharmonicSeriesPreset.STANDARD_HARMONIC_SERIES,
    XenharmonicSeriesPreset.MATHARMONIC_SERIES,
    XenharmonicSeriesPreset.ED_TWO_HARMONIC_SERIES,
    XenharmonicSeriesPreset.ED_THREE_HARMONIC_SERIES,
    XenharmonicSeriesPreset.ED_EULER_HARMONIC_SERIES,
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
    specControlsOrder,
    presetsOrder,
}
