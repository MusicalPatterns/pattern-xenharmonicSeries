// tslint:disable:no-trailing-whitespace

import { SpecPropertyType, standardSpecAttributes } from '@musical-patterns/pattern'
import { SequenceType, XenharmonicSeriesSpecAttributes } from './types'

const baseDescription: string = `
when "use base" is on, will raise this number to what the term would have been otherwise 
(otherwise, this value is ignored)
`

const useBaseDescription: string = `
when on, will raise the "base" to what the term would have been otherwise (and otherwise will ignore it)
`

const attributes: XenharmonicSeriesSpecAttributes = {
    ...standardSpecAttributes,
    base: {
        constraint: {
            excludeMin: true,
            min: 1,
        },
        description: baseDescription,
        order: 6,
        specPropertyType: SpecPropertyType.RANGED,
    },
    constant: {
        description: 'a constant added to each element in the final sequence',
        order: 7,
        specPropertyType: SpecPropertyType.RANGED,
    },
    ground: {
        description: 'divide all elements in the final sequence by the first such that the first is set to 1',
        formattedName: 'ground the sequence at 1',
        order: 8,
        specPropertyType: SpecPropertyType.TOGGLED,
    },
    iterations: {
        description: 'how many times to climb by this scale before repeating',
        formattedName: 'scale iterations',
        order: 9,
        specPropertyType: SpecPropertyType.RANGED,
    },
    lowerBound: {
        constraint: {
            integer: true,
        },
        description: 'lower bound of the partial summation/product',
        formattedName: 'lower bound of summation/product',
        order: 3,
        specPropertyType: SpecPropertyType.RANGED,
    },
    power: {
        description: 'the power to raise the index of summation/product to in each term',
        order: 2,
        specPropertyType: SpecPropertyType.RANGED,
    },
    sequenceType: {
        constraint: [
            {
                formattedName: 'partial sum',
                key: SequenceType.PARTIAL_SUM,
                order: 1,
            },
            {
                formattedName: 'partial product',
                key: SequenceType.PARTIAL_PRODUCT,
                order: 2,
            },
        ],
        description: 'Σ or Π',
        order: 1,
        specPropertyType: SpecPropertyType.OPTIONED,
    },
    termCoefficient: {
        description: 'a coefficient applied to each term',
        order: 8,
        specPropertyType: SpecPropertyType.RANGED,
    },
    upperBound: {
        constraint: {
            integer: true,
        },
        description: 'upper bound of the partial summation/product',
        formattedName: 'upper bound of summation/product',
        order: 4,
        specPropertyType: SpecPropertyType.RANGED,
    },
    useBase: {
        description: useBaseDescription,
        order: 5,
        specPropertyType: SpecPropertyType.TOGGLED,
    },
}

export {
    attributes,
}
