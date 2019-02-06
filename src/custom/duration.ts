import { from, Time, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'

const duration: (spec: XenharmonicSeriesSpec) => Time =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpec): Time =>
        to.Time((from.Ordinal(upperBound) - from.Ordinal(lowerBound) + 1) * from.Cardinal(iterations))

export {
    duration,
}
