import { XenharmonicSeriesSpecProperty } from './types'

const specControlsOrder: XenharmonicSeriesSpecProperty[] = [
    XenharmonicSeriesSpecProperty.SEQUENCE_TYPE,
    XenharmonicSeriesSpecProperty.HOLD_ROOT,
    XenharmonicSeriesSpecProperty.POWER,
    XenharmonicSeriesSpecProperty.LOWER_BOUND,
    XenharmonicSeriesSpecProperty.UPPER_BOUND,
    XenharmonicSeriesSpecProperty.USE_BASE,
    XenharmonicSeriesSpecProperty.BASE,
    XenharmonicSeriesSpecProperty.CONSTANT,
    XenharmonicSeriesSpecProperty.GROUND,
    XenharmonicSeriesSpecProperty.TERM_COEFFICIENT,
    XenharmonicSeriesSpecProperty.SCALE_ITERATIONS,
    XenharmonicSeriesSpecProperty.STACK,
]

export {
    specControlsOrder,
}
