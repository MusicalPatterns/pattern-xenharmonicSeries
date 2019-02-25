import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales } from '@musical-patterns/pattern'
import { XenharmonicSeriesSpec } from '../spec'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (spec: XenharmonicSeriesSpec): Scale[] =>
        buildStandardScales(spec, { pitchScalars: buildScalars(spec) })

export {
    buildScales,
}
