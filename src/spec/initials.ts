import { standardInitialSpecs, StandardSpec } from '@musical-patterns/pattern'
import { INITIAL, MULTIPLICATIVE_IDENTITY, NEXT, NO_TRANSLATION, OCTAVE, to } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_POWER,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
} from '../constants'
import { SequenceType, XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from './types'

const initialSpecs: XenharmonicSeriesSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASE_FREQUENCY ]: XENHARMONIC_SERIES_INITIAL_BASE_FREQUENCY,
    [ XenharmonicSeriesSpec.BASE ]: OCTAVE,
    [ XenharmonicSeriesSpec.CONSTANT ]: NO_TRANSLATION,
    [ XenharmonicSeriesSpec.DESCENDING ]: false,
    [ XenharmonicSeriesSpec.GROUND ]: true,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: true,
    [ XenharmonicSeriesSpec.SCALE_ITERATIONS ]: to.Cardinal(1),
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    [ XenharmonicSeriesSpec.PARTICULATE ]: NEXT,
    [ XenharmonicSeriesSpec.POWER ]: XENHARMONIC_SERIES_INITIAL_POWER,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType.PARTIAL_SUM,
    [ XenharmonicSeriesSpec.STACK ]: [ INITIAL ],
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: MULTIPLICATIVE_IDENTITY,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: false,
    [ XenharmonicSeriesSpec.USE_BASE ]: false,
}

export {
    initialSpecs,
}
