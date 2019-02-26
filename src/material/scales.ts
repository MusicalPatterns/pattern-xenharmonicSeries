import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales } from '@musical-patterns/pattern'
import { from, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (spec: XenharmonicSeriesSpec): Scale[] =>
        buildStandardScales(
            spec,
            {
                pitchScalars: buildScalars(spec)
                    .map(from.Frequency)
                    .map(to.Scalar),
            },
        )

export {
    buildScales,
}
