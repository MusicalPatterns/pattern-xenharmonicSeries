import { as, Cardinal, Hz, isUndefined, Logarithm, Maybe, notAs, Pitch, Scalar, use } from '@musical-patterns/utilities'
import { notAs as xenharmonicSeriesFrom, PartialSumOrProduct } from '../../nominals'
import { XenharmonicSequence } from './types'

const applyIterations:
    (sequence: XenharmonicSequence, iterations: Cardinal<XenharmonicSequence[]>) => Array<Scalar<Pitch>> =
    (sequence: XenharmonicSequence, iterations: Cardinal<XenharmonicSequence[]>): Array<Scalar<Pitch>> => {
        const terminalPartial: Maybe<PartialSumOrProduct> = sequence.pop()
        if (isUndefined(terminalPartial)) {
            return sequence
                .map(
                    (partial: PartialSumOrProduct) =>
                        as.Scalar<Pitch>(xenharmonicSeriesFrom.PartialSumOrProduct(partial)),
                )
        }
        const window: Logarithm = as.Logarithm(xenharmonicSeriesFrom.PartialSumOrProduct(terminalPartial))

        let results: Array<Scalar<Pitch>> = []
        for (let index: number = 0; index < notAs.Cardinal(iterations); index += 1) {
            const windowScaling: number = notAs.Logarithm(use.Exponent(
                window,
                as.Exponent<Logarithm>(index),
            ))
            const iteration: Array<Scalar<Pitch>> = sequence.map((partial: PartialSumOrProduct) =>
                use.Scalar(
                    partial,
                    as.Scalar<PartialSumOrProduct>(windowScaling),
                ),
            )
                .map(
                    (partial: PartialSumOrProduct) =>
                        as.Scalar<Pitch>(xenharmonicSeriesFrom.PartialSumOrProduct(partial)),
                )

            results = results.concat(iteration)
        }

        return results
    }

export {
    applyIterations,
}
