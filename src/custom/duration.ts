import { from, Time, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../specs'

const duration: (spec: XenharmonicSeriesSpec) => Time =
    ({ upperBound, lowerBound, iterations }: XenharmonicSeriesSpec): Time =>
        to.Time((from.Index(upperBound) - from.Index(lowerBound) + 1) * from.Count(iterations))

export {
    duration,
}
