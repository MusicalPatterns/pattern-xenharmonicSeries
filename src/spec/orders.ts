import { XenharmonicSeriesPreset, XenharmonicSeriesSpecProperty } from './types'

const specControlsOrder: XenharmonicSeriesSpecProperty[] = [
    XenharmonicSeriesSpecProperty.SEQUENCE_TYPE,
    XenharmonicSeriesSpecProperty.HOLD_ROOT,
    XenharmonicSeriesSpecProperty.POWER,
    XenharmonicSeriesSpecProperty.LOWER_BOUND,
    XenharmonicSeriesSpecProperty.UPPER_BOUND,
    XenharmonicSeriesSpecProperty.USE_BASE,
    XenharmonicSeriesSpecProperty.BASE,
    XenharmonicSeriesSpecProperty.DESCENDING,
    XenharmonicSeriesSpecProperty.CONSTANT,
    XenharmonicSeriesSpecProperty.GROUND,
    XenharmonicSeriesSpecProperty.TERM_COEFFICIENT,
    XenharmonicSeriesSpecProperty.SCALE_ITERATIONS,
    XenharmonicSeriesSpecProperty.STACK,
    XenharmonicSeriesSpecProperty.USE_PARTICULATE,
    XenharmonicSeriesSpecProperty.PARTICULATE,
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
]

export {
    specControlsOrder,
    presetsOrder,
}
