import { apply, Count, from, to } from '@musical-patterns/utilities'

const applyIterations: (sequence: number[], iterations: Count) => number[] =
    (sequence: number[], iterations: Count): number[] => {
        const window: number = sequence.pop() as number

        let results: number[] = []
        for (let i: number = 0; i < from.Count(iterations); i += 1) {
            const iteration: number[] = sequence.map((term: number) => term * apply.Power(window, to.Power(i)))
            results = results.concat(iteration)
        }

        return results
    }

export {
    applyIterations,
}
