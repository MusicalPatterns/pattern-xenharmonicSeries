import { MaterializeScales, Scale } from '@musical-patterns/compiler'
import { materializeStandardScales } from '@musical-patterns/pattern'
import { from, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { computeScalars } from './scalars'

const materializeScales: MaterializeScales =
    (spec: XenharmonicSeriesSpec): Scale[] =>
        materializeStandardScales(
            spec,
            {
                pitchScalars: computeScalars(spec)
                    .map(from.Frequency)
                    .map(to.Scalar),
            },
        )

export {
    materializeScales,
}
