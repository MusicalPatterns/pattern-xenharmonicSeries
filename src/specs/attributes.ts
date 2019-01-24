import { SpecPropertyType, standardSpecAttributes } from '@musical-patterns/pattern'
import { baseDescription, useBaseDescription } from './descriptions'
import { specControlsOrder } from './order'
import { SequenceType, XenharmonicSeriesSpecAttributes, XenharmonicSeriesSpecProperty } from './types'

const attributes: XenharmonicSeriesSpecAttributes = {
    ...standardSpecAttributes,
    [ XenharmonicSeriesSpecProperty.BASE ]: {
        constraint: {
            excludeMin: true,
            min: 1,
        },
        description: baseDescription,
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.BASE),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: {
        description: 'a constant added to each element in the final sequence',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.CONSTANT),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.GROUND ]: {
        description: 'divide all elements in the final sequence by the first such that the first is set to 1',
        formattedName: 'ground the sequence at 1',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.GROUND),
        specPropertyType: SpecPropertyType.TOGGLED,
    },
    [ XenharmonicSeriesSpecProperty.HOLD_ROOT ]: {
        description: 'whether to hold the root to compare each other note against',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.HOLD_ROOT),
        specPropertyType: SpecPropertyType.TOGGLED,
    },
    [ XenharmonicSeriesSpecProperty.SCALE_ITERATIONS ]: {
        description: 'how many times to climb by this scale before repeating',
        formattedName: 'scale iterations',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.SCALE_ITERATIONS),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.LOWER_BOUND ]: {
        constraint: {
            integer: true,
        },
        description: 'lower bound of the partial summation/product',
        formattedName: 'lower bound of summation/product',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.LOWER_BOUND),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.POWER ]: {
        description: 'the power to raise the index of summation/product to in each term',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.POWER),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: {
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
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.SEQUENCE_TYPE),
        specPropertyType: SpecPropertyType.OPTIONED,
    },
    [ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]: {
        description: 'a coefficient applied to each term',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.TERM_COEFFICIENT),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: {
        constraint: {
            integer: true,
        },
        description: 'upper bound of the partial summation/product',
        formattedName: 'upper bound of summation/product',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.UPPER_BOUND),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.USE_BASE ]: {
        description: useBaseDescription,
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.USE_BASE),
        specPropertyType: SpecPropertyType.TOGGLED,
    },
}

export {
    attributes,
}
