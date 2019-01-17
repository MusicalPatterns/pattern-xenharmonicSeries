import {
    PatternSpecPropertyType,
    standardInitialPatternSpec,
    standardPatternSpecAttributes,
} from '@musical-patterns/pattern'
import { from, OCTAVE, to } from '@musical-patterns/utilities'
import { XENHARMONIC_SERIES_LOWER_BOUND, XENHARMONIC_SERIES_UPPER_BOUND } from './constants'
import {
    XenharmonicSeriesOperation,
    XenharmonicSeriesPatternSpec,
    XenharmonicSeriesPatternSpecAttributes,
} from './types'

const initialSpec: XenharmonicSeriesPatternSpec = {
    ...standardInitialPatternSpec,
    base: to.Base(from.Scalar(OCTAVE)),
    lowerBound: XENHARMONIC_SERIES_LOWER_BOUND,
    operation: XenharmonicSeriesOperation.SERIES,
    upperBound: XENHARMONIC_SERIES_UPPER_BOUND,
}

const specAttributes: XenharmonicSeriesPatternSpecAttributes = {
    ...standardPatternSpecAttributes,
    base: {
        constraint: {
            excludeMin: true,
            min: 1,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    lowerBound: {
        constraint: {
            integer: true,
            min: 1,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    operation: {
        constraint: Object.values(XenharmonicSeriesOperation),
        patternSpecPropertyType: PatternSpecPropertyType.OPTIONED,
    },
    upperBound: {
        constraint: {
            integer: true,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
}

export {
    initialSpec,
    specAttributes,
}
