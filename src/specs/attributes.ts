import { PatternSpecPropertyType, standardPatternSpecAttributes } from '@musical-patterns/pattern'
import { XenharmonicSeriesOperation, XenharmonicSeriesPatternSpecAttributes } from '../types'

const attributes: XenharmonicSeriesPatternSpecAttributes = {
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
            min: 1,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
}

export {
    attributes,
}
