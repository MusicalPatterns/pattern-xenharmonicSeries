import { standardInitialSpec, StandardProperty } from '@musical-patterns/pattern'
import { INITIAL, MULTIPLICATIVE_IDENTITY, NEXT, NO_TRANSLATION, OCTAVE, to } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_POWER,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
} from '../constants'
import { SequenceType, XenharmonicSeriesProperty, XenharmonicSeriesSpec } from './types'

const initial: XenharmonicSeriesSpec = {
    ...standardInitialSpec,
    [ StandardProperty.BASE_FREQUENCY ]: XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    [ XenharmonicSeriesProperty.BASE ]: OCTAVE,
    [ XenharmonicSeriesProperty.CONSTANT ]: NO_TRANSLATION,
    [ XenharmonicSeriesProperty.DESCENDING ]: false,
    [ XenharmonicSeriesProperty.GROUND ]: true,
    [ XenharmonicSeriesProperty.HOLD_ROOT ]: true,
    [ XenharmonicSeriesProperty.SCALE_ITERATIONS ]: to.Cardinal(1),
    [ XenharmonicSeriesProperty.LOWER_BOUND ]: XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    [ XenharmonicSeriesProperty.PARTICULATE ]: NEXT,
    [ XenharmonicSeriesProperty.POWER ]: XENHARMONIC_SERIES_INITIAL_POWER,
    [ XenharmonicSeriesProperty.SEQUENCE_TYPE ]: SequenceType.PARTIAL_SUM,
    [ XenharmonicSeriesProperty.STACK ]: [ INITIAL ],
    [ XenharmonicSeriesProperty.TERM_COEFFICIENT ]: MULTIPLICATIVE_IDENTITY,
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    [ XenharmonicSeriesProperty.USE_PARTICULATE ]: false,
    [ XenharmonicSeriesProperty.USE_BASE ]: false,
}

export {
    initial,
}
