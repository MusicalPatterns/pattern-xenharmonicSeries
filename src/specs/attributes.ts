import { PatternSpecPropertyType, standardPatternSpecAttributes } from '@musical-patterns/pattern'
import { SequenceType, XenharmonicSeriesPatternSpecAttributes } from './types'

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
    power: {
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    sequenceType: {
        constraint: [
            {
                formattedName: 'partial sum',
                key: SequenceType.PARTIAL_SUM,
            },
            {
                formattedName: 'partial product',
                key: SequenceType.PARTIAL_PRODUCT,
            },
        ],
        patternSpecPropertyType: PatternSpecPropertyType.OPTIONED,
    },
    upperBound: {
        constraint: {
            integer: true,
            min: 1,
        },
        patternSpecPropertyType: PatternSpecPropertyType.RANGED,
    },
    useBase: {
        patternSpecPropertyType: PatternSpecPropertyType.TOGGLED,
    },
}

export {
    attributes,
}
