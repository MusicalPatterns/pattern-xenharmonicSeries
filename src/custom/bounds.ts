import { apply, from, Index, numbers, to } from '@musical-patterns/utilities'

const buildBoundedNumbers: (lowerBound: Index, upperBound: Index) => number[] =
    (lowerBound: Index, upperBound: Index): number[] =>
        numbers.map((n: number): number => n - 1)
            .slice(from.Index(lowerBound), apply.Offset(from.Index(upperBound), to.Offset(1)))

export {
    buildBoundedNumbers,
}
