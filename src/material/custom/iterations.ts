import { apply, Base, Cardinal, from, Hz, isUndefined, Maybe, Scalar, to } from '@musical-patterns/utilities'
import { from as xenharmonicSeriesFrom, PartialSumOrProduct } from '../../nominals'
import { XenharmonicSequence } from './types'

const applyIterations: (sequence: XenharmonicSequence, iterations: Cardinal) => Array<Scalar<Hz>> =
    (sequence: XenharmonicSequence, iterations: Cardinal): Array<Scalar<Hz>> => {
        const terminalPartial: Maybe<PartialSumOrProduct> = sequence.pop()
        if (isUndefined(terminalPartial)) {
            return sequence
                .map(
                    (partial: PartialSumOrProduct) =>
                        to.Scalar<Hz>(xenharmonicSeriesFrom.PartialSumOrProduct(partial)),
                )
        }
        const window: Base = to.Base(xenharmonicSeriesFrom.PartialSumOrProduct(terminalPartial))

        let results: Array<Scalar<Hz>> = []
        for (let index: number = 0; index < from.Cardinal(iterations); index += 1) {
            const windowScaling: number = from.Base(apply.Power(
                window,
                to.Power<Base>(index),
            ))
            const iteration: Array<Scalar<Hz>> = sequence.map((partial: PartialSumOrProduct) =>
                apply.Scalar(
                    partial,
                    to.Scalar<PartialSumOrProduct>(windowScaling),
                ),
            )
                .map(
                    (partial: PartialSumOrProduct) =>
                        to.Scalar<Hz>(xenharmonicSeriesFrom.PartialSumOrProduct(partial)),
                )

            results = results.concat(iteration)
        }

        return results
    }

export {
    applyIterations,
}
