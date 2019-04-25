import { Cardinal, Hz, INCLUSIVE, Ordinal, Pitch, Scalar, use } from '@musical-patterns/utilities'
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

const computeScalars: (specs: XenharmonicSeriesSpecs) => Array<Scalar<Pitch>> =
    (specs: XenharmonicSeriesSpecs): Array<Scalar<Pitch>> => {
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

const computeSuperparticularSeriesScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ].specs)

const computeDuperparticularSeriesScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ].specs)

const computeSubparticularSeriesScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.SUBPARTICULAR_SERIES ].specs)

const computeDubparticularSeriesScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.DUBPARTICULAR_SERIES ].specs)

export {
    computeScalars,
    computeSuperparticularSeriesScalars,
    computeDuperparticularSeriesScalars,
    computeSubparticularSeriesScalars,
    computeDubparticularSeriesScalars,
}
