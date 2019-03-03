// tslint:disable ban-types no-any

import { buildNominalInterface, DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE } from '@musical-patterns/utilities'

type PartialSumOrProduct = Number & { _PartialSumOrProductBrand: void }
type Term = Number & { _TermBrand: void }

const { to, from } = buildNominalInterface({
    number: {
        PartialSumOrProduct: DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE as any as PartialSumOrProduct,
        Term: DUMMY_VALUE_FOR_BUILDING_NOMINAL_INTERFACE as any as Term,
    },
})

export {
    to,
    from,
    PartialSumOrProduct,
    Term,
}
