import { apply, Cardinal, difference, from, INCLUSIVE, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../../spec'

const computeNoteCount: (specs: XenharmonicSeriesSpecs) => Cardinal =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpecs): Cardinal =>
        to.Cardinal(from.Ordinal(apply.Multiple(
            apply.Translation(
                difference(upperBound, lowerBound),
                INCLUSIVE,
            ),
            to.Multiple<Ordinal>(from.Cardinal(iterations)),
        )))

export {
    computeNoteCount,
}
