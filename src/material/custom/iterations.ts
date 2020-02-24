import { as, Cardinal, isUndefined, Logarithm, Maybe, Pitch, pow, Scalar, use } from '@musical-patterns/utilities'
import { XenharmonicSequence, XenharmonicSequenceElement } from '../../nominals'

const applyIterations:
    (sequence: XenharmonicSequence, iterations: Cardinal<XenharmonicSequence[]>) => Array<Scalar<Pitch>> =
    (sequence: XenharmonicSequence, iterations: Cardinal<XenharmonicSequence[]>): Array<Scalar<Pitch>> => {
        const terminalElement: Maybe<XenharmonicSequenceElement> = sequence.pop()
        if (isUndefined(terminalElement)) {
            return sequence.map(
                (element: XenharmonicSequenceElement): Scalar<Pitch> => as.Scalar<Pitch>(as.number(element)),
            )
        }
        const period: Logarithm = as.Logarithm(as.number(terminalElement))

        let results: Array<Scalar<Pitch>> = []
        for (let index: number = 0; index < as.number(iterations); index += 1) {
            const periodScaling: number = as.number(pow(period, as.Exponent(index)))
            const iteration: Array<Scalar<Pitch>> = sequence.map(
                (element: XenharmonicSequenceElement): XenharmonicSequenceElement =>
                    use.Scalar(element, as.Scalar<XenharmonicSequenceElement>(periodScaling)),
            )
                .map((element: XenharmonicSequenceElement): Scalar<Pitch> => as.Scalar<Pitch>(as.number(element)))

            results = results.concat(iteration)
        }

        return results
    }

export {
    applyIterations,
}
