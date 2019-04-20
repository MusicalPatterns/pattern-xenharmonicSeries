// tslint:disable ban-types no-any

import { computeNominalInterface, DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE } from '@musical-patterns/utilities'

type PartialSumOrProduct = Number & { _NominalBrand: 'PartialSumOrProduct' }
type Term = Number & { _NominalBrand: 'Term' }

const { as, notAs } = computeNominalInterface({
    number: {
        PartialSumOrProduct: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as PartialSumOrProduct,
        Term: DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE as Term,
    },
})

export {
    as,
    notAs,
    PartialSumOrProduct,
    Term,
}
