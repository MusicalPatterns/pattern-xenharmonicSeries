import { apply, difference, from, Time, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'

const duration: (spec: XenharmonicSeriesSpec) => Time =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpec): Time =>
        to.Time(from.Ordinal(apply.Cardinal(
            apply.Translation(difference(upperBound, lowerBound), to.Translation(1)),
            iterations,
        )))

export {
    duration,
}
