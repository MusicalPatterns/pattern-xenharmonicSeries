import { OptionedConstraint, RangedConstraint } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import { SequenceType, XenharmonicSeriesProperty } from './types'

const xenharmonicSeriesRangedConstraints: DictionaryOf<RangedConstraint> = {
    [ XenharmonicSeriesProperty.BASE ]: {
        excludeMin: true,
        min: 1,
    },
    [ XenharmonicSeriesProperty.LOWER_BOUND ]: {
        integer: true,
    },
    [ XenharmonicSeriesProperty.PARTICULATE ]: {
        integer: true,
        min: 0,
    },
    [ XenharmonicSeriesProperty.STACK ]: {
        integer: true,
        min: 0,
    },
    [ XenharmonicSeriesProperty.UPPER_BOUND ]: {
        integer: true,
    },
}
const xenharmonicSeriesOptionedConstraints: DictionaryOf<OptionedConstraint> = {
    [ XenharmonicSeriesProperty.SEQUENCE_TYPE ]: [
        {
            formattedName: 'partial sum',
            order: 1,
            value: SequenceType.PARTIAL_SUM,
        },
        {
            formattedName: 'partial product',
            order: 2,
            value: SequenceType.PARTIAL_PRODUCT,
        },
    ],
}

export {
    xenharmonicSeriesOptionedConstraints,
    xenharmonicSeriesRangedConstraints,
}
