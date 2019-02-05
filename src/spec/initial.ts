import { standardInitialSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { MULTIPLICATIVE_IDENTITY, OCTAVE, to } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_POWER,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
} from '../constants'
import { SequenceType, XenharmonicSeriesSpec, XenharmonicSeriesSpecProperty } from './types'

const initial: XenharmonicSeriesSpec = {
    ...standardInitialSpec,
    [ StandardSpecProperties.BASE_FREQUENCY ]: XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    [ XenharmonicSeriesSpecProperty.BASE ]: OCTAVE,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: to.Offset(0),
    [ XenharmonicSeriesSpecProperty.DESCENDING ]: false,
    [ XenharmonicSeriesSpecProperty.GROUND ]: true,
    [ XenharmonicSeriesSpecProperty.HOLD_ROOT ]: true,
    [ XenharmonicSeriesSpecProperty.SCALE_ITERATIONS ]: to.Count(1),
    [ XenharmonicSeriesSpecProperty.LOWER_BOUND ]: XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    [ XenharmonicSeriesSpecProperty.PARTICULATE ]: to.Offset(1),
    [ XenharmonicSeriesSpecProperty.POWER ]: XENHARMONIC_SERIES_INITIAL_POWER,
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: SequenceType.PARTIAL_SUM,
    [ XenharmonicSeriesSpecProperty.STACK ]: [ to.Index(0) ],
    [ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]: MULTIPLICATIVE_IDENTITY,
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    [ XenharmonicSeriesSpecProperty.USE_PARTICULATE ]: false,
    [ XenharmonicSeriesSpecProperty.USE_BASE ]: false,
}

export {
    initial,
}
