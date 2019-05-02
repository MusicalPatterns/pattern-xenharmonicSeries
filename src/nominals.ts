// tslint:disable ban-types no-any

import { computeNominalInterface, DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE } from '@musical-patterns/utilities'

type PartialSumOrProduct = Number & { _NominalBrand: 'PartialSumOrProduct' }
type Stack = Number & { _NominalBrand: 'Stack' }
type Term = Number & { _NominalBrand: 'Term' }

const { as: xenharmonicSeriesAs } = computeNominalInterface({
    number: {
        PartialSumOrProduct: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as PartialSumOrProduct,
        Stack: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Stack,
        Term: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Term,
    },
})

export {
    xenharmonicSeriesAs,
    PartialSumOrProduct,
    Stack,
    Term,
}
