import { Constraint } from '@musical-patterns/pattern'
import { DictionaryOf } from '@musical-patterns/utilities'
import { SequenceType, XenharmonicSeriesSpecProperty } from './types'

const xenharmonicSeriesConstraints: DictionaryOf<Constraint> = {
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
    [ XenharmonicSeriesSpecProperty.STACK ]: {
        integer: true,
        min: 0,
    },
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: {
        integer: true,
    },
}

export {
    xenharmonicSeriesConstraints,
}
