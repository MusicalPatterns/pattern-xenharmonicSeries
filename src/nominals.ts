// tslint:disable ban-types no-any

import { computeNominalInterface, DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE } from '@musical-patterns/utilities'

type Stack = Number & { _NominalBrand: 'Stack' }
type Term = Number & { _NominalBrand: 'Term' }
type XenharmonicSequenceElement = Number & { _NominalBrand: 'XenharmonicSequenceElement' }

const { as: xenharmonicSeriesAs } = computeNominalInterface({
    number: {
        Stack: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Stack,
        Term: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Term,
        XenharmonicSequenceElement: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as XenharmonicSequenceElement,
    },
})

type XenharmonicSequence = XenharmonicSequenceElement[]

export {
    xenharmonicSeriesAs,
    XenharmonicSequenceElement,
    Stack,
    Term,
    XenharmonicSequence,
}
