import { as, Cardinal, isUndefined, Logarithm, Maybe, Pitch, pow, Scalar, use } from '@musical-patterns/utilities'
import { PartialSumOrProduct } from '../../nominals'
import { XenharmonicSequence } from './types'

const applyIterations:
    (sequence: XenharmonicSequence, iterations: Cardinal<XenharmonicSequence[]>) => Array<Scalar<Pitch>> =
    (sequence: XenharmonicSequence, iterations: Cardinal<XenharmonicSequence[]>): Array<Scalar<Pitch>> => {
        const terminalPartial: Maybe<PartialSumOrProduct> = sequence.pop()
        if (isUndefined(terminalPartial)) {
            return sequence
                .map(
                    (partial: PartialSumOrProduct) =>
                        as.Scalar<Pitch>(as.number(partial)),
                )
        }
        const period: Logarithm = as.Logarithm(as.number(terminalPartial))

        let results: Array<Scalar<Pitch>> = []
        for (let index: number = 0; index < as.number(iterations); index += 1) {
            const periodScaling: number = as.number(pow(period, as.Exponent(index)))
            const iteration: Array<Scalar<Pitch>> = sequence.map((partial: PartialSumOrProduct) =>
                use.Scalar(
                    partial,
                    as.Scalar<PartialSumOrProduct>(periodScaling),
                ),
            )
                .map(
                    (partial: PartialSumOrProduct) =>
                        as.Scalar<Pitch>(as.number(partial)),
                )

            results = results.concat(iteration)
        }

        return results
    }

export {
    applyIterations,
}
