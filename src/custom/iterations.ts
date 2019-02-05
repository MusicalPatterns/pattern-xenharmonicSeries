import { apply, Base, Count, from, Maybe, Scalar, to } from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct } from '../nominal'
import { XenharmonicSequence } from './types'

const applyIterations: (sequence: XenharmonicSequence, iterations: Count) => Scalar[] =
    (sequence: XenharmonicSequence, iterations: Count): Scalar[] => {
        const terminalPartial: Maybe<PartialSumOrProduct> = sequence.pop()
        if (!terminalPartial) {
            return sequence
                .map(xenharmonicSeriesFrom.PartialSumOrProduct)
                .map(to.Scalar)
        }
        const window: Base = to.Base(xenharmonicSeriesFrom.PartialSumOrProduct(terminalPartial))

        let results: Scalar[] = []
        for (let i: number = 0; i < from.Count(iterations); i += 1) {
            const iteration: Scalar[] = sequence.map((partial: PartialSumOrProduct) =>
                apply.Scalar(
                    partial,
                    to.Scalar(from.Base(
                        apply.Power(window, to.Power(i)),
                    )),
                ),
            )
                .map(xenharmonicSeriesFrom.PartialSumOrProduct)
                .map(to.Scalar)
            results = results.concat(iteration)
        }

        return results
    }

export {
    applyIterations,
}
