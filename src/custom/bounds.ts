import { apply, Ordinal, slice, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'

const buildBoundedNumbers: (lowerBound: Ordinal, upperBound: Ordinal) => number[] =
    (lowerBound: Ordinal, upperBound: Ordinal): number[] =>
        slice(
            zeroAndPositiveIntegers,
            lowerBound,
            apply.Translation(upperBound, to.Translation(1)),
        )

export {
    buildBoundedNumbers,
}
