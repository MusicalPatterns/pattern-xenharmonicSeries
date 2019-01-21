import { apply, to } from '@musical-patterns/utilities'

const ground: (numbers: number[]) => number[] =
    (numbers: number[]): number[] => {
        const min: number = apply.Index(numbers, to.Index(0))

        return numbers.map((n: number): number =>
            n - min)
    }

export {
    ground,
}
