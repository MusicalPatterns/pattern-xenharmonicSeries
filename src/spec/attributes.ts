import {
    OptionedConstraint,
    RangedConstraint,
    SpecPropertyType,
    standardSpecAttributes,
} from '@musical-patterns/pattern'
import { xenharmonicSeriesConstraints } from './constraints'
import { baseDescription, useBaseDescription } from './descriptions'
import { specControlsOrder } from './orders'
import { XenharmonicSeriesSpecAttributes, XenharmonicSeriesSpecProperty } from './types'

const attributes: XenharmonicSeriesSpecAttributes = {
    ...standardSpecAttributes,
    [ XenharmonicSeriesSpecProperty.BASE ]: {
        constraint: xenharmonicSeriesConstraints[ XenharmonicSeriesSpecProperty.BASE ] as RangedConstraint,
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
        constraint: xenharmonicSeriesConstraints[ XenharmonicSeriesSpecProperty.LOWER_BOUND ] as RangedConstraint,
        description: 'lower bound of the partial summation/product',
        formattedName: 'lower bound of summation/product',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.LOWER_BOUND),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.PARTICULATE ]: {
        constraint: xenharmonicSeriesConstraints[ XenharmonicSeriesSpecProperty.PARTICULATE ] as RangedConstraint,
        description: 'divide each term by the term in the position this # of terms later',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.PARTICULATE),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.POWER ]: {
        description: 'the power to raise the index of summation/product to in each term',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.POWER),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: {
        constraint: xenharmonicSeriesConstraints[ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ] as OptionedConstraint,
        description: 'Σ or Π',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.SEQUENCE_TYPE),
        specPropertyType: SpecPropertyType.OPTIONED,
    },
    [ XenharmonicSeriesSpecProperty.STACK ]: {
        constraint: xenharmonicSeriesConstraints[ XenharmonicSeriesSpecProperty.STACK ] as RangedConstraint,
        description: 'an array of offsets defining a polyad which is applied to each step of the scale',
        isArrayed: true,
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.STACK),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]: {
        description: 'a coefficient applied to each term',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.TERM_COEFFICIENT),
        specPropertyType: SpecPropertyType.RANGED,
    },
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: {
        constraint: xenharmonicSeriesConstraints[ XenharmonicSeriesSpecProperty.UPPER_BOUND ] as RangedConstraint,
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
    [ XenharmonicSeriesSpecProperty.USE_PARTICULATE ]: {
        description: 'turn use of particulate effect on or off',
        order: specControlsOrder.indexOf(XenharmonicSeriesSpecProperty.USE_PARTICULATE),
        specPropertyType: SpecPropertyType.TOGGLED,
    },
}

export {
    attributes,
}
