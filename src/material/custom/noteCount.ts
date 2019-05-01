import { as, Cardinal, difference, INCLUSIVE, insteadOf, Transition, use } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../../spec'
import { XenharmonicSequence } from './types'

const computeNoteCount: (specs: XenharmonicSeriesSpecs) => Cardinal<XenharmonicSequence> =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpecs): Cardinal<XenharmonicSequence> =>
        as.Cardinal<XenharmonicSequence>(as.number(use.Multiple(
            use.Cardinal(
                difference(upperBound, lowerBound),
                insteadOf<Cardinal, Transition<XenharmonicSequence>>(INCLUSIVE),
            ),
            as.Multiple<Transition<XenharmonicSequence>>(as.number(iterations)),
        )))

export {
    computeNoteCount,
}
