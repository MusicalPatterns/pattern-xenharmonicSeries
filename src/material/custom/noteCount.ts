import { apply, Cardinal, difference, from, INCLUSIVE, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../../spec'

const computeNoteCount: (spec: XenharmonicSeriesSpec) => Cardinal =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpec): Cardinal =>
        to.Cardinal(from.Ordinal(apply.Scalar(
            apply.Translation(difference(upperBound, lowerBound), INCLUSIVE),
            to.Scalar(from.Cardinal(iterations)),
        )))

export {
    computeNoteCount,
}
