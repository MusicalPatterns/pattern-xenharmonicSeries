// tslint:disable:variable-name no-any

import { PartialSumOrProduct, Term } from './types'

const PartialSumOrProduct: (partial: number) => PartialSumOrProduct =
    (partial: number): PartialSumOrProduct => partial as any
const Term: (term: number) => Term =
    (term: number): Term => term as any

export {
    PartialSumOrProduct,
    Term,
}
