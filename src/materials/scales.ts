import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardPatternSpecProperties } from '@musical-patterns/pattern'
import { Scalar, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesPatternSpec } from '../specs'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (patternSpec: XenharmonicSeriesPatternSpec): Scale[] => {
        const { nonScale } = buildStandardScales()
        const scalars: Scalar[] = buildScalars(patternSpec)

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            offset: patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_OFFSET ] || to.Offset(0),
            scalar: patternSpec[ StandardPatternSpecProperties.PATTERN_DURATION_SCALAR ] || to.Scalar(1),
            scalars: nonScale.scalars,
        }
        const pitchesScale: Scale = {
            offset: patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_OFFSET ] || to.Offset(0),
            scalar: patternSpec[ StandardPatternSpecProperties.PATTERN_PITCH_SCALAR ] || to.Scalar(1),
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
