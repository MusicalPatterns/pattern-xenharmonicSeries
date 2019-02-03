import { apply, Offset, to } from '@musical-patterns/utilities'

const applyParticulate: (sequence: number[], particulate: Offset) => number[] =
    (sequence: number[], particulate: Offset): number[] =>
        sequence.map((n: number, index: number): number =>
            n / apply.Index(sequence, apply.Offset(to.Index(index), particulate)))

export {
    applyParticulate,
}
