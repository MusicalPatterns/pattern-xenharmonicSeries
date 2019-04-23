import { as, Cardinal, difference, INCLUSIVE, insteadOf, notAs, use } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../../spec'
import { XenharmonicSequence } from './types'

const computeNoteCount: (specs: XenharmonicSeriesSpecs) => Cardinal<XenharmonicSequence> =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpecs): Cardinal<XenharmonicSequence> =>
        use.Multiple(
            use.Cardinal(
                difference(upperBound, lowerBound),
                insteadOf<Cardinal, Cardinal<XenharmonicSequence>>(INCLUSIVE),
            ),
            as.Multiple<Cardinal<XenharmonicSequence>>(notAs.Cardinal(iterations)),
        )

export {
    computeNoteCount,
}
