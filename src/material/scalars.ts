import { Cardinal, Hz, INCLUSIVE, Ordinal, Scalar, use } from '@musical-patterns/utilities'
import { presets, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../spec'
import { Particulate } from '../types'
import {
    applyIterations,
    applyParticulate,
    computeBoundedIntegers,
    computeNeededExtraIterationsForStack,
    computeSequence,
    computeSequenceTypeParameters,
    XenharmonicSequence,
} from './custom'

const maybeExtendBoundForParticulate: (
    upperBound: Ordinal<XenharmonicSequence>,
    useParticulate: boolean,
    particulate: Particulate,
) => Ordinal<XenharmonicSequence> =
    (
        upperBound: Ordinal<XenharmonicSequence>,
        useParticulate: boolean,
        particulate: Particulate,
    ): Ordinal<XenharmonicSequence> =>
        useParticulate ? use.Cardinal(upperBound, particulate) : upperBound

const computeScalars: (specs: XenharmonicSeriesSpecs) => Array<Scalar<Hz>> =
    (specs: XenharmonicSeriesSpecs): Array<Scalar<Hz>> => {
        const { sequenceType, lowerBound, upperBound, iterations, particulate, useParticulate, stack } = specs
        const { partialSeed, operation } = computeSequenceTypeParameters(sequenceType)
        const boundedNumbers: number[] = computeBoundedIntegers(
            lowerBound,
            use.Cardinal(maybeExtendBoundForParticulate(upperBound, useParticulate, particulate), INCLUSIVE),
        )

        let sequence: XenharmonicSequence = computeSequence({ boundedNumbers, specs, partialSeed, operation })

        if (useParticulate) {
            sequence = applyParticulate(sequence, particulate)
        }

        const neededExtraIterations: Cardinal<Cardinal<XenharmonicSequence[]>> =
            computeNeededExtraIterationsForStack(stack)

        return applyIterations(
            sequence,
            use.Cardinal(iterations, neededExtraIterations),
        )
    }

const computeSuperparticularSeriesScalars: () => Array<Scalar<Hz>> =
    (): Array<Scalar<Hz>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ].specs)

const computeDuperparticularSeriesScalars: () => Array<Scalar<Hz>> =
    (): Array<Scalar<Hz>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ].specs)

const computeSubparticularSeriesScalars: () => Array<Scalar<Hz>> =
    (): Array<Scalar<Hz>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.SUBPARTICULAR_SERIES ].specs)

const computeDubparticularSeriesScalars: () => Array<Scalar<Hz>> =
    (): Array<Scalar<Hz>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.DUBPARTICULAR_SERIES ].specs)

export {
    computeScalars,
    computeSuperparticularSeriesScalars,
    computeDuperparticularSeriesScalars,
    computeSubparticularSeriesScalars,
    computeDubparticularSeriesScalars,
}
