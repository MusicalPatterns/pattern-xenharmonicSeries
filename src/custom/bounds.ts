import { apply, from, Ordinal, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'

const buildBoundedNumbers: (lowerBound: Ordinal, upperBound: Ordinal) => number[] =
    (lowerBound: Ordinal, upperBound: Ordinal): number[] =>
        zeroAndPositiveIntegers.slice(
            from.Ordinal(lowerBound),
            apply.Translation(from.Ordinal(upperBound), to.Translation(1)),
        )

export {
    buildBoundedNumbers,
}
