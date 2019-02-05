// tslint:disable variable-name no-any

import { PartialSumOrProduct, Term } from './types'

const PartialSumOrProduct: (partial: PartialSumOrProduct) => number =
    (partial: PartialSumOrProduct): number => partial as any
const Term: (term: Term) => number =
    (term: Term): number => term as any

export {
    PartialSumOrProduct,
    Term,
}
