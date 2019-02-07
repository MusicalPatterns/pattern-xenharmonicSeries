// tslint:disable ban-types

type PartialSumOrProduct = Number & { _PartialSumOrProductBrand: void }

type Term = Number & { _TermBrand: void }

export {
    PartialSumOrProduct,
    Term,
}
