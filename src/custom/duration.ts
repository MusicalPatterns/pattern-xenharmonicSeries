import { apply, difference, from, INCLUSIVE, Time, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'

const duration: (spec: XenharmonicSeriesSpec) => Time =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpec): Time =>
        to.Time(from.Ordinal(apply.Cardinal(
            apply.Translation(difference(upperBound, lowerBound), INCLUSIVE),
            iterations,
        )))

export {
    duration,
}
