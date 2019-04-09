import { apply, INCLUSIVE, Integer, Ordinal, slice, ZERO_AND_POSITIVE_INTEGERS } from '@musical-patterns/utilities'

const computeBoundedIntegers: (lowerBound: Ordinal, upperBound: Ordinal) => Integer[] =
    (lowerBound: Ordinal, upperBound: Ordinal): Integer[] =>
        slice(
            ZERO_AND_POSITIVE_INTEGERS,
            lowerBound,
            apply.Translation(upperBound, INCLUSIVE),
        )

export {
    computeBoundedIntegers,
}
