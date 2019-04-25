import { standardInitialSpecs, StandardSpec } from '@musical-patterns/spec'
import { as, INITIAL, MULTIPLICATIVE_IDENTITY, NEXT, OCTAVE, Scalar } from '@musical-patterns/utilities'
import {
    XENHARMONIC_SERIES_INITIAL_BASIS_FREQUENCY,
    XENHARMONIC_SERIES_INITIAL_CONSTANT,
    XENHARMONIC_SERIES_INITIAL_EXPONENT,
    XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
} from '../constants'
import { XenharmonicSequence } from '../material'
import { Term } from '../nominals'
import { SequenceType } from '../types'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from './types'

const initialSpecs: XenharmonicSeriesSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASIS_FREQUENCY ]: XENHARMONIC_SERIES_INITIAL_BASIS_FREQUENCY,
    [ XenharmonicSeriesSpec.LOGARITHM ]: OCTAVE,
    [ XenharmonicSeriesSpec.CONSTANT ]: XENHARMONIC_SERIES_INITIAL_CONSTANT,
    [ XenharmonicSeriesSpec.DESCENDING ]: false,
    [ XenharmonicSeriesSpec.GROUND ]: true,
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: true,
    [ XenharmonicSeriesSpec.ITERATIONS ]: as.Cardinal<XenharmonicSequence[]>(1),
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: XENHARMONIC_SERIES_INITIAL_LOWER_BOUND,
    [ XenharmonicSeriesSpec.PARTICULATE ]: NEXT,
    [ XenharmonicSeriesSpec.EXPONENT ]: XENHARMONIC_SERIES_INITIAL_EXPONENT,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType.PARTIAL_SUM,
    [ XenharmonicSeriesSpec.STACK ]: [ INITIAL ],
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: MULTIPLICATIVE_IDENTITY as Scalar<Term>,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: XENHARMONIC_SERIES_INITIAL_UPPER_BOUND,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: false,
    [ XenharmonicSeriesSpec.USE_LOGARITHM ]: false,
}

export {
    initialSpecs,
}
