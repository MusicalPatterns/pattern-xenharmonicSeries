import { OptionedConstraint, RangedConstraint } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import { SequenceType, XenharmonicSeriesSpecProperty } from './types'

const xenharmonicSeriesRangedConstraints: DictionaryOf<RangedConstraint> = {
    [ XenharmonicSeriesSpecProperty.BASE ]: {
        excludeMin: true,
        min: 1,
    },
    [ XenharmonicSeriesSpecProperty.LOWER_BOUND ]: {
        integer: true,
    },
    [ XenharmonicSeriesSpecProperty.PARTICULATE ]: {
        integer: true,
        min: 0,
    },
    [ XenharmonicSeriesSpecProperty.STACK ]: {
        integer: true,
        min: 0,
    },
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: {
        integer: true,
    },
}
const xenharmonicSeriesOptionedConstraints: DictionaryOf<OptionedConstraint> = {
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: [
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
}

export {
    xenharmonicSeriesOptionedConstraints,
    xenharmonicSeriesRangedConstraints,
}
