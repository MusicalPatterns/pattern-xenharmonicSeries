import { apply, Base, Cardinal, from, Maybe, Scalar, to } from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct } from '../nominal'
import { XenharmonicSequence } from './types'

const applyIterations: (sequence: XenharmonicSequence, iterations: Cardinal) => Scalar[] =
    (sequence: XenharmonicSequence, iterations: Cardinal): Scalar[] => {
        const terminalPartial: Maybe<PartialSumOrProduct> = sequence.pop()
        if (!terminalPartial) {
            return sequence
                .map(xenharmonicSeriesFrom.PartialSumOrProduct)
                .map(to.Scalar)
        }
        const window: Base = to.Base(xenharmonicSeriesFrom.PartialSumOrProduct(terminalPartial))

        let results: Scalar[] = []
        for (let index: number = 0; index < from.Cardinal(iterations); index += 1) {
            const iteration: Scalar[] = sequence.map((partial: PartialSumOrProduct) =>
                apply.Scalar(
                    partial,
                    to.Scalar(from.Base(
                        apply.Power(window, to.Power(index)),
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
