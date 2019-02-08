import { apply, difference, from, INCLUSIVE, Ms, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'

const duration: (spec: XenharmonicSeriesSpec) => Ms =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpec): Ms =>
        to.Ms(from.Ordinal(apply.Cardinal(
            apply.Translation(difference(upperBound, lowerBound), INCLUSIVE),
            iterations,
        )))

export {
    duration,
}
