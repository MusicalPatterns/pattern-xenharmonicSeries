import { computeBasicOptionedConstraintFromEnum, OptionedConstraint, RangedConstraint } from '@musical-patterns/spec'
import { ObjectOf } from '@musical-patterns/utilities'
import { FunctionType, NumberSequence } from '../types'
import { XenharmonicSeriesSpec } from './types'

const xenharmonicSeriesRangedConstraints: ObjectOf<RangedConstraint> = {
    [ XenharmonicSeriesSpec.STACK ]: {
        integer: true,
        min: 0,
    },

    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: {
        integer: true,
        min: 0,
    },
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: {
        integer: true,
        min: 0,
    },

    [ XenharmonicSeriesSpec.LOWER_BOUND ]: {
        integer: true,
        required: true,
    },
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: {
        integer: true,
        required: true,
    },

    [ XenharmonicSeriesSpec.COEFFICIENT ]: {
        integer: true,
        min: 1,
        required: true,
    },

    [ XenharmonicSeriesSpec.SIEVE ]: {
        integer: true,
        min: 1,
    },

    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: {
        excludeMin: true,
        min: 0,
    },
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: {
        excludeMin: true,
        min: 1,
    },

    [ XenharmonicSeriesSpec.INITIAL_VALUE_OVERRIDE ]: {
        excludeMin: true,
        min: 0,
    },
}

const xenharmonicSeriesOptionedConstraints: ObjectOf<OptionedConstraint> = {
    [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]:
        computeBasicOptionedConstraintFromEnum(NumberSequence, { required: true }),
    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: computeBasicOptionedConstraintFromEnum(FunctionType),
}

export {
    xenharmonicSeriesOptionedConstraints,
    xenharmonicSeriesRangedConstraints,
}
