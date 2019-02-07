import { apply, INCLUSIVE, Ordinal, slice, zeroAndPositiveIntegers } from '@musical-patterns/utilities'

const buildBoundedNumbers: (lowerBound: Ordinal, upperBound: Ordinal) => number[] =
    (lowerBound: Ordinal, upperBound: Ordinal): number[] =>
        slice(
            zeroAndPositiveIntegers,
            lowerBound,
            apply.Translation(upperBound, INCLUSIVE),
        )

export {
    buildBoundedNumbers,
}
