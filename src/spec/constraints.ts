import { computeBasicOptionedConstraintFromEnum, OptionedConstraint, RangedConstraint } from '@musical-patterns/spec'
import { ObjectOf } from '@musical-patterns/utilities'
import { SequenceType } from '../types'
import { XenharmonicSeriesSpec } from './types'

const xenharmonicSeriesRangedConstraints: ObjectOf<RangedConstraint> = {
    [ XenharmonicSeriesSpec.BASE ]: {
        excludeMin: true,
        min: 1,
    },
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: {
        integer: true,
    },
    [ XenharmonicSeriesSpec.PARTICULATE ]: {
        integer: true,
        min: 0,
    },
    [ XenharmonicSeriesSpec.STACK ]: {
        integer: true,
        min: 0,
    },
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: {
        integer: true,
    },
}
const xenharmonicSeriesOptionedConstraints: ObjectOf<OptionedConstraint> = {
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: computeBasicOptionedConstraintFromEnum(SequenceType),
}

export {
    xenharmonicSeriesOptionedConstraints,
    xenharmonicSeriesRangedConstraints,
}
