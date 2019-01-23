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
    lowerBound: {
        constraint: {
            integer: true,
            min: 1,
        },
        description: 'lower bound of the partial sum or product',
        formattedName: 'lower bound of summation or product',
        order: 3,
        specPropertyType: SpecPropertyType.RANGED,
    },
    power: {
        description: 'the power to raise the index of summation to in each term',
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
    upperBound: {
        constraint: {
            integer: true,
            min: 1,
        },
        description: 'upper bound of the partial sum or product',
        formattedName: 'upper bound of summation or product',
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
