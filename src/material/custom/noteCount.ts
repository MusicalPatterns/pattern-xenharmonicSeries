import { apply, Cardinal, difference, from, INCLUSIVE, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../../spec'

const computeNoteCount: (specs: XenharmonicSeriesSpecs) => Cardinal =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpecs): Cardinal =>
        to.Cardinal(from.Ordinal(apply.Scalar(
            apply.Translation(
                difference(upperBound, lowerBound),
                INCLUSIVE,
            ),
            to.Scalar<Ordinal>(from.Cardinal(iterations)),
        )))

export {
    computeNoteCount,
}
