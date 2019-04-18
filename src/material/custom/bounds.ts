import { apply, INCLUSIVE, Integer, Ordinal, slice, ZERO_AND_POSITIVE_INTEGERS } from '@musical-patterns/utilities'
import { PartialSumOrProduct } from '../../nominals'

const computeBoundedIntegers:
    (lowerBound: Ordinal<PartialSumOrProduct>, upperBound: Ordinal<PartialSumOrProduct>) => Integer[] =
    (lowerBound: Ordinal<PartialSumOrProduct>, upperBound: Ordinal<PartialSumOrProduct>): Integer[] =>
        slice(
            ZERO_AND_POSITIVE_INTEGERS,
            lowerBound,
            apply.Translation(upperBound, INCLUSIVE),
        )

export {
    computeBoundedIntegers,
}
