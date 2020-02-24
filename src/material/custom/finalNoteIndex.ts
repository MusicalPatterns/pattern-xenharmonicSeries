import { as, difference, floor, isUndefined, Ordinal, reciprocal, Transition, use } from '@musical-patterns/utilities'
import { XenharmonicSequence } from '../../nominals'
import { XenharmonicSeriesSpecs } from '../../spec'

const computeFinalNoteIndex: (specs: XenharmonicSeriesSpecs) => Ordinal<XenharmonicSequence> =
    ({ upperBound, lowerBound, iterations, sieve }: XenharmonicSeriesSpecs): Ordinal<XenharmonicSequence> =>
        as.Ordinal<XenharmonicSequence>(floor(use.Scalar(
            as.number(use.Multiple(
                difference(upperBound, lowerBound),
                as.Multiple<Transition>(as.number(iterations)),
            )),
            as.Scalar(reciprocal(isUndefined(sieve) ? 1 : as.number(sieve))),
        )))

export {
    computeFinalNoteIndex,
}
