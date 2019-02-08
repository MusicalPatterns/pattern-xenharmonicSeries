import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpecProperties } from '@musical-patterns/pattern'
import { from, NO_TRANSLATION, Scalar, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (spec: XenharmonicSeriesSpec): Scale[] => {
        const { nonScale } = buildStandardScales()
        const scalars: Scalar[] = buildScalars(spec)

        const gainScale: Scale = nonScale
        const durationsScale: Scale = {
            scalar: to.Scalar(from.Ms(spec[ StandardSpecProperties.BASE_DURATION ] || to.Ms(1))),
            scalars: nonScale.scalars,
            translation: spec[ StandardSpecProperties.DURATION_TRANSLATION ] || NO_TRANSLATION,
        }
        const pitchesScale: Scale = {
            scalar: to.Scalar(from.Hz(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Hz(1))),
            scalars,
            translation: spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || NO_TRANSLATION,
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
