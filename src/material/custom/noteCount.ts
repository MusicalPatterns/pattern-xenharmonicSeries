import { as, Cardinal, difference, INCLUSIVE, notAs, Ordinal, use } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../../spec'

const computeNoteCount: (specs: XenharmonicSeriesSpecs) => Cardinal =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpecs): Cardinal =>
        as.Cardinal(notAs.Ordinal(use.Multiple(
            use.Translation(
                difference(upperBound, lowerBound),
                INCLUSIVE,
            ),
            as.Multiple<Ordinal>(notAs.Cardinal(iterations)),
        )))

export {
    computeNoteCount,
}
