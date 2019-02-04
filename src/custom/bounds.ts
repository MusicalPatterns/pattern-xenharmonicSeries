import { apply, from, Index, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'

const buildBoundedNumbers: (lowerBound: Index, upperBound: Index) => number[] =
    (lowerBound: Index, upperBound: Index): number[] =>
        zeroAndPositiveIntegers.slice(from.Index(lowerBound), apply.Offset(from.Index(upperBound), to.Offset(1)))

export {
    buildBoundedNumbers,
}
