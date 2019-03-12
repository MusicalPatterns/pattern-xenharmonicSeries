// tslint:disable max-file-line-count

import { InputType, standardConfigurations } from '@musical-patterns/pattern'
import { xenharmonicSeriesOptionedConstraints, xenharmonicSeriesRangedConstraints } from './constraints'
import { baseDescription, useBaseDescription } from './descriptions'
import { specsOrder } from './orders'
import { XenharmonicSeriesConfigurations, XenharmonicSeriesSpec } from './types'

const configurations: XenharmonicSeriesConfigurations = {
    ...standardConfigurations,
    [ XenharmonicSeriesSpec.BASE ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.BASE ],
        description: baseDescription,
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.BASE),
    },
    [ XenharmonicSeriesSpec.CONSTANT ]: {
        description: 'a constant added to each element in the final sequence',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.CONSTANT),
    },
    [ XenharmonicSeriesSpec.GROUND ]: {
        description: 'divide all elements in the final sequence by the first such that the first is set to 1',
        formattedName: 'ground the sequence at 1',
        inputType: InputType.TOGGLED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.GROUND),
    },
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: {
        description: 'whether to hold the root to compare each other note against',
        inputType: InputType.TOGGLED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.HOLD_ROOT),
    },
    [ XenharmonicSeriesSpec.SCALE_ITERATIONS ]: {
        description: 'how many times to climb by this scale before repeating',
        formattedName: 'scale iterations',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.SCALE_ITERATIONS),
    },
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.LOWER_BOUND ],
        description: 'lower bound of the partial summation/product',
        formattedName: 'lower bound of summation/product',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.LOWER_BOUND),
    },
    [ XenharmonicSeriesSpec.PARTICULATE ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.PARTICULATE ],
        description: 'divide each term by the term in the position this # of terms later',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.PARTICULATE),
    },
    [ XenharmonicSeriesSpec.POWER ]: {
        description: 'the power to raise the index of summation/product to in each term',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.POWER),
    },
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: {
        constraint: xenharmonicSeriesOptionedConstraints[ XenharmonicSeriesSpec.SEQUENCE_TYPE ],
        description: 'Σ or Π',
        inputType: InputType.OPTIONED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.SEQUENCE_TYPE),
    },
    [ XenharmonicSeriesSpec.STACK ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.STACK ],
        description: 'an array of translations defining a polyad which is applied to each step of the scale',
        inputType: InputType.RANGED,
        isArrayed: true,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.STACK),
    },
    [ XenharmonicSeriesSpec.TERM_COEFFICIENT ]: {
        description: 'a coefficient applied to each term',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.TERM_COEFFICIENT),
    },
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.UPPER_BOUND ],
        description: 'upper bound of the partial summation/product',
        formattedName: 'upper bound of summation/product',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.UPPER_BOUND),
    },
    [ XenharmonicSeriesSpec.USE_BASE ]: {
        description: useBaseDescription,
        inputType: InputType.TOGGLED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.USE_BASE),
    },
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: {
        description: 'turn use of particulate effect on or off',
        inputType: InputType.TOGGLED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.USE_PARTICULATE),
    },
    [ XenharmonicSeriesSpec.DESCENDING ]: {
        description: 'reverse the scale so that it descends in steps (not necessarily in pitch)',
        inputType: InputType.TOGGLED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.DESCENDING),
    },
}

export {
    configurations,
}
