import { SpecPropertyType, standardSpecAttributes } from '@musical-patterns/pattern'
import { SequenceType, XenharmonicSeriesSpecAttributes } from './types'

const attributes: XenharmonicSeriesSpecAttributes = {
    ...standardSpecAttributes,
    base: {
        constraint: {
            excludeMin: true,
            min: 1,
        },
        specPropertyType: SpecPropertyType.RANGED,
    },
    lowerBound: {
        constraint: {
            integer: true,
            min: 1,
        },
        specPropertyType: SpecPropertyType.RANGED,
    },
    power: {
        specPropertyType: SpecPropertyType.RANGED,
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
        specPropertyType: SpecPropertyType.OPTIONED,
    },
    upperBound: {
        constraint: {
            integer: true,
            min: 1,
        },
        specPropertyType: SpecPropertyType.RANGED,
    },
    useBase: {
        specPropertyType: SpecPropertyType.TOGGLED,
    },
}

export {
    attributes,
}
