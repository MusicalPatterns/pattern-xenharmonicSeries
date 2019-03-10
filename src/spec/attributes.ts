// tslint:disable max-file-line-count

import { PropertyType, standardAttributes } from '@musical-patterns/pattern'
import { xenharmonicSeriesOptionedConstraints, xenharmonicSeriesRangedConstraints } from './constraints'
import { baseDescription, useBaseDescription } from './descriptions'
import { specControlsOrder } from './orders'
import { XenharmonicSeriesAttributes, XenharmonicSeriesProperty } from './types'

const attributes: XenharmonicSeriesAttributes = {
    ...standardAttributes,
    [ XenharmonicSeriesProperty.BASE ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesProperty.BASE ],
        description: baseDescription,
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.BASE),
        propertyType: PropertyType.RANGED,
    },
    [ XenharmonicSeriesProperty.CONSTANT ]: {
        description: 'a constant added to each element in the final sequence',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.CONSTANT),
        propertyType: PropertyType.RANGED,
    },
    [ XenharmonicSeriesProperty.GROUND ]: {
        description: 'divide all elements in the final sequence by the first such that the first is set to 1',
        formattedName: 'ground the sequence at 1',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.GROUND),
        propertyType: PropertyType.TOGGLED,
    },
    [ XenharmonicSeriesProperty.HOLD_ROOT ]: {
        description: 'whether to hold the root to compare each other note against',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.HOLD_ROOT),
        propertyType: PropertyType.TOGGLED,
    },
    [ XenharmonicSeriesProperty.SCALE_ITERATIONS ]: {
        description: 'how many times to climb by this scale before repeating',
        formattedName: 'scale iterations',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.SCALE_ITERATIONS),
        propertyType: PropertyType.RANGED,
    },
    [ XenharmonicSeriesProperty.LOWER_BOUND ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesProperty.LOWER_BOUND ],
        description: 'lower bound of the partial summation/product',
        formattedName: 'lower bound of summation/product',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.LOWER_BOUND),
        propertyType: PropertyType.RANGED,
    },
    [ XenharmonicSeriesProperty.PARTICULATE ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesProperty.PARTICULATE ],
        description: 'divide each term by the term in the position this # of terms later',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.PARTICULATE),
        propertyType: PropertyType.RANGED,
    },
    [ XenharmonicSeriesProperty.POWER ]: {
        description: 'the power to raise the index of summation/product to in each term',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.POWER),
        propertyType: PropertyType.RANGED,
    },
    [ XenharmonicSeriesProperty.SEQUENCE_TYPE ]: {
        constraint: xenharmonicSeriesOptionedConstraints[ XenharmonicSeriesProperty.SEQUENCE_TYPE ],
        description: 'Σ or Π',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.SEQUENCE_TYPE),
        propertyType: PropertyType.OPTIONED,
    },
    [ XenharmonicSeriesProperty.STACK ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesProperty.STACK ],
        description: 'an array of translations defining a polyad which is applied to each step of the scale',
        isArrayed: true,
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.STACK),
        propertyType: PropertyType.RANGED,
    },
    [ XenharmonicSeriesProperty.TERM_COEFFICIENT ]: {
        description: 'a coefficient applied to each term',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.TERM_COEFFICIENT),
        propertyType: PropertyType.RANGED,
    },
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesProperty.UPPER_BOUND ],
        description: 'upper bound of the partial summation/product',
        formattedName: 'upper bound of summation/product',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.UPPER_BOUND),
        propertyType: PropertyType.RANGED,
    },
    [ XenharmonicSeriesProperty.USE_BASE ]: {
        description: useBaseDescription,
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.USE_BASE),
        propertyType: PropertyType.TOGGLED,
    },
    [ XenharmonicSeriesProperty.USE_PARTICULATE ]: {
        description: 'turn use of particulate effect on or off',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.USE_PARTICULATE),
        propertyType: PropertyType.TOGGLED,
    },
    [ XenharmonicSeriesProperty.DESCENDING ]: {
        description: 'reverse the scale so that it descends in steps (not necessarily in pitch)',
        order: specControlsOrder.indexOf(XenharmonicSeriesProperty.DESCENDING),
        propertyType: PropertyType.TOGGLED,
    },
}

export {
    attributes,
}
