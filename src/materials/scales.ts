import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpecProperties } from '@musical-patterns/pattern'
import { Scalar, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../specs'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (spec: XenharmonicSeriesSpec): Scale[] => {
        const { nonScale } = buildStandardScales()
        const scalars: Scalar[] = buildScalars(spec)

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            offset: spec[ StandardSpecProperties.PATTERN_DURATION_OFFSET ] || to.Offset(0),
            scalar: spec[ StandardSpecProperties.PATTERN_DURATION_SCALAR ] || to.Scalar(1),
            scalars: nonScale.scalars,
        }
        const pitchesScale: Scale = {
            offset: spec[ StandardSpecProperties.PATTERN_PITCH_OFFSET ] || to.Offset(0),
            scalar: spec[ StandardSpecProperties.PATTERN_PITCH_SCALAR ] || to.Scalar(1),
            scalars,
        }

        return [
            gainScale,
            durationsScale,
            pitchesScale,
        ]
    }

export {
    buildScales,
}
