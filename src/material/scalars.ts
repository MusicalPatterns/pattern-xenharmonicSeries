import { apply, Cardinal, Frequency, INCLUSIVE, Ordinal, Scalar, to, Translation } from '@musical-patterns/utilities'
import { presets, XenharmonicSeriesPreset, XenharmonicSeriesSpec } from '../spec'
import {
    applyIterations,
    applyParticulate,
    computeBoundedIntegers,
    computeNeededExtraIterationsForStack,
    computeSequence,
    computeSequenceTypeParameters,
    XenharmonicSequence,
} from './custom'

const maybeExtendBoundForParticulate:
    (upperBound: Ordinal, useParticulate: boolean, particulate: Translation) => Ordinal =
    (upperBound: Ordinal, useParticulate: boolean, particulate: Translation): Ordinal =>
        useParticulate ? apply.Translation(upperBound, particulate) : upperBound

const computeScalars: (spec: XenharmonicSeriesSpec) => Array<Scalar<Frequency>> =
    (spec: XenharmonicSeriesSpec): Array<Scalar<Frequency>> => {
        const { sequenceType, lowerBound, upperBound, iterations, particulate, useParticulate, stack } = spec
        const { partialSeed, operation } = computeSequenceTypeParameters(sequenceType)
        const boundedNumbers: number[] = computeBoundedIntegers(
            lowerBound,
            apply.Translation(maybeExtendBoundForParticulate(upperBound, useParticulate, particulate), INCLUSIVE),
        )

        let sequence: XenharmonicSequence = computeSequence({ boundedNumbers, spec, partialSeed, operation })

        if (useParticulate) {
            sequence = applyParticulate(sequence, particulate)
        }

        const neededExtraIterations: Cardinal = computeNeededExtraIterationsForStack(stack, sequence)

        return applyIterations(sequence, apply.Translation(iterations, to.Translation((neededExtraIterations))))
    }

const computeSuperparticularSeriesScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ].spec)

const computeDuperparticularSeriesScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ].spec)

const computeSubparticularSeriesScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.SUBPARTICULAR_SERIES ].spec)

const computeDubparticularSeriesScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.DUBPARTICULAR_SERIES ].spec)

export {
    computeScalars,
    computeSuperparticularSeriesScalars,
    computeDuperparticularSeriesScalars,
    computeSubparticularSeriesScalars,
    computeDubparticularSeriesScalars,
}
