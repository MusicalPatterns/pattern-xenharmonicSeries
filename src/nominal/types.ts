type PartialSumOrProduct = number & { _PartialSumOrProductBrand: void }

type Term = number & { _TermBrand: void }

export {
    PartialSumOrProduct,
    Term,
}
