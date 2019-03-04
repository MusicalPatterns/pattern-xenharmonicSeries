import { apply, INCLUSIVE, Integer, Ordinal, slice, zeroAndPositiveIntegers } from '@musical-patterns/utilities'

const buildBoundedIntegers: (lowerBound: Ordinal, upperBound: Ordinal) => Integer[] =
    (lowerBound: Ordinal, upperBound: Ordinal): Integer[] =>
        slice(
            zeroAndPositiveIntegers,
            lowerBound,
            apply.Translation(upperBound, INCLUSIVE),
        )

export {
    buildBoundedIntegers,
}
