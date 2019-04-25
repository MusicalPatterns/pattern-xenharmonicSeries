import { as, Cardinal, difference, INCLUSIVE, insteadOf, notAs, Transition, use } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../../spec'
import { XenharmonicSequence } from './types'

const computeNoteCount: (specs: XenharmonicSeriesSpecs) => Cardinal<XenharmonicSequence> =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpecs): Cardinal<XenharmonicSequence> =>
        as.Cardinal<XenharmonicSequence>(notAs.Transition(use.Multiple(
            use.Cardinal(
                difference(upperBound, lowerBound),
                insteadOf<Cardinal, Transition<XenharmonicSequence>>(INCLUSIVE),
            ),
            as.Multiple<Transition<XenharmonicSequence>>(notAs.Cardinal(iterations)),
        )))

export {
    computeNoteCount,
}
