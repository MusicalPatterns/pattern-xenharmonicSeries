import { apply, INCLUSIVE, Integer, Ordinal, slice, zeroAndPositiveIntegers } from '@musical-patterns/utilities'

const buildBoundedNumbers: (lowerBound: Ordinal, upperBound: Ordinal) => Integer[] =
    (lowerBound: Ordinal, upperBound: Ordinal): Integer[] =>
        slice(
            zeroAndPositiveIntegers,
            lowerBound,
            apply.Translation(upperBound, INCLUSIVE),
        )

export {
    buildBoundedNumbers,
}
