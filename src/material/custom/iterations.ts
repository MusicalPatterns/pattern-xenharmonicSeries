import { apply, Base, Cardinal, Frequency, from, isUndefined, Maybe, Scalar, to } from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct } from '../../nominal'
import { XenharmonicSequence } from './types'

const applyIterations: (sequence: XenharmonicSequence, iterations: Cardinal) => Array<Scalar<Frequency>> =
    (sequence: XenharmonicSequence, iterations: Cardinal): Array<Scalar<Frequency>> => {
        const terminalPartial: Maybe<PartialSumOrProduct> = sequence.pop()
        if (isUndefined(terminalPartial)) {
            return sequence
                .map(xenharmonicSeriesFrom.PartialSumOrProduct)
                .map(to.Scalar)
                .map(to.Frequency)
        }
        const window: Base = to.Base(xenharmonicSeriesFrom.PartialSumOrProduct(terminalPartial))

        let results: Array<Scalar<Frequency>> = []
        for (let index: number = 0; index < from.Cardinal(iterations); index += 1) {
            const windowScaling: number = from.Base(apply.Power(
                window,
                to.Power(index),
            ))
            const iteration: Array<Scalar<Frequency>> = sequence.map((partial: PartialSumOrProduct) =>
                apply.Scalar(
                    partial,
                    to.Scalar(windowScaling),
                ),
            )
                .map(xenharmonicSeriesFrom.PartialSumOrProduct)
                .map(to.Scalar)
                .map(to.Frequency)
            results = results.concat(iteration)
        }

        return results
    }

export {
    applyIterations,
}
