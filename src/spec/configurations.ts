// tslint:disable max-file-line-count

import { InputType, standardConfigurations } from '@musical-patterns/spec'
import { xenharmonicSeriesOptionedConstraints, xenharmonicSeriesRangedConstraints } from './constraints'
import { specsOrder } from './orders'
import { XenharmonicSeriesConfigurations, XenharmonicSeriesSpec } from './types'

const configurations: XenharmonicSeriesConfigurations = {
    ...standardConfigurations,
    [ XenharmonicSeriesSpec.DESCENDING ]: {
        description: 'reverse the scale so that it descends in steps (not necessarily in pitch)',
        inputType: InputType.TOGGLED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.DESCENDING),
    },
    [ XenharmonicSeriesSpec.HOLD_ROOT ]: {
        description: 'whether to hold the root to compare each other note against',
        inputType: InputType.TOGGLED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.HOLD_ROOT),
    },
    [ XenharmonicSeriesSpec.ITERATIONS ]: {
        constraint: { required: true },
        description: 'how many times to climb by this scale before repeating',
        formattedName: 'scale iterations',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.ITERATIONS),
    },
    [ XenharmonicSeriesSpec.STACK ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.STACK ],
        description: 'an array of translations defining a polyad which is applied to each step of the scale',
        inputType: InputType.RANGED,
        isArrayed: true,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.STACK),
    },
    [ XenharmonicSeriesSpec.SORTED_OCTAVE_REDUCED ]: {
        description: 'whether to octave-reduce and then sort the scale',
        formattedName: 'octave reduce & sort',
        inputType: InputType.TOGGLED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.SORTED_OCTAVE_REDUCED),
    },

    [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]: {
        constraint: xenharmonicSeriesOptionedConstraints[ XenharmonicSeriesSpec.NUMBER_SEQUENCE ],
        description: 'which number sequence to use',
        inputType: InputType.OPTIONED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.NUMBER_SEQUENCE),
    },
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ],
        description: 'when number sequence is superparticular, specifies for each pitch how many times the denominator must divide into the numerator',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.SUPERPARTICULAR_DIV),
    },
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ],
        description: 'when number sequence is superparticular, specifies for each pitch what the remainder must be when its numerator is divided by the denominator',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.SUPERPARTICULAR_DIV),
    },

    [ XenharmonicSeriesSpec.RECIPROCATE ]: {
        description: 'whether to take the reciprocal of each pitch (converting harmonic to subharmonic)',
        inputType: InputType.TOGGLED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.RECIPROCATE),
    },

    [ XenharmonicSeriesSpec.LOWER_BOUND ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.LOWER_BOUND ],
        description: 'initial term to include',
        formattedName: 'initial term to include',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.LOWER_BOUND),
    },
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.UPPER_BOUND ],
        description: 'final term to include',
        formattedName: 'final term to include',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.UPPER_BOUND),
    },

    [ XenharmonicSeriesSpec.COEFFICIENT ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.COEFFICIENT ],
        description: 'a coefficient to multiply each value by',
        inputType: InputType.RANGED,
        isArrayed: true,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.COEFFICIENT),
    },

    [ XenharmonicSeriesSpec.SIEVE ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.SIEVE ],
        description: 'only use every nth value',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.SIEVE),
    },

    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: {
        constraint: xenharmonicSeriesOptionedConstraints[ XenharmonicSeriesSpec.FUNCTION_TYPE ],
        description: 'which type of function to transform the sequence into',
        inputType: InputType.OPTIONED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.FUNCTION_TYPE),
    },
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.EXPONENTIAL_BASE ],
        description: 'the base to use with an exponential function',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.EXPONENTIAL_BASE),
    },
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.LOGARITHMIC_BASE ],
        description: 'the base to use with a logarithmic function',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.LOGARITHMIC_BASE),
    },
    [ XenharmonicSeriesSpec.POWER ]: {
        description: 'the power to use with a power function',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.POWER),
    },

    [ XenharmonicSeriesSpec.INITIAL_VALUE_OVERRIDE ]: {
        constraint: xenharmonicSeriesRangedConstraints[ XenharmonicSeriesSpec.INITIAL_VALUE_OVERRIDE ],
        description: 'the value to override the initial value with',
        inputType: InputType.RANGED,
        order: specsOrder.indexOf(XenharmonicSeriesSpec.INITIAL_VALUE_OVERRIDE),
    },
}

export {
    configurations,
}
