import { standardInitialSpecs, StandardSpec } from '@musical-patterns/spec'
import { INITIAL } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_INITIAL_COEFFICIENT,
    XENHARMONIC_SERIES_INITIAL_HZ_PHYSICALIZATION,
    XENHARMONIC_SERIES_INITIAL_ITERATIONS,
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
} from '../constants'
import { NumberSequence } from '../types'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from './types'

const initialSpecs: XenharmonicSeriesSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.HZ_PHYSICALIZATION ]: XENHARMONIC_SERIES_INITIAL_HZ_PHYSICALIZATION,

    [ XenharmonicSeriesSpec.DESCENDING ]: false,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: true,
    [ XenharmonicSeriesSpec.ITERATIONS ]: XENHARMONIC_SERIES_INITIAL_ITERATIONS,
    [ XenharmonicSeriesSpec.STACK ]: [ INITIAL ],
    [ XenharmonicSeriesSpec.SORTED_OCTAVE_REDUCED ]: false,

    [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]: NumberSequence.HARMONIC_NUMBERS,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: undefined,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: undefined,

    [ XenharmonicSeriesSpec.RECIPROCATE ]: false,

    [ XenharmonicSeriesSpec.LOWER_BOUND ]: XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,

    [ XenharmonicSeriesSpec.COEFFICIENT ]: XENHARMONIC_SERIES_INITIAL_COEFFICIENT,

    [ XenharmonicSeriesSpec.SIEVE ]: undefined,

    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: undefined,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: undefined,
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: undefined,
    [ XenharmonicSeriesSpec.POWER ]: undefined,

    [ XenharmonicSeriesSpec.INITIAL_VALUE_OVERRIDE ]: undefined,
}

export {
    initialSpecs,
}
