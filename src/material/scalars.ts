import {
    apply,
    Cardinal,
    Frequency,
    from,
    INCLUSIVE,
    Ordinal,
    Scalar,
    to,
    Translation,
} from '@musical-patterns/utilities'
import { presets, XenharmonicSeriesPreset, XenharmonicSeriesSpecs } from '../spec'
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

const computeScalars: (specs: XenharmonicSeriesSpecs) => Array<Scalar<Frequency>> =
    (specs: XenharmonicSeriesSpecs): Array<Scalar<Frequency>> => {
        const { sequenceType, lowerBound, upperBound, iterations, particulate, useParticulate, stack } = specs
        const { partialSeed, operation } = computeSequenceTypeParameters(sequenceType)
        const boundedNumbers: number[] = computeBoundedIntegers(
            lowerBound,
            apply.Translation(maybeExtendBoundForParticulate(upperBound, useParticulate, particulate), INCLUSIVE),
        )

        let sequence: XenharmonicSequence = computeSequence({ boundedNumbers, specs, partialSeed, operation })

        if (useParticulate) {
            sequence = applyParticulate(sequence, particulate)
        }

        const neededExtraIterations: Cardinal = computeNeededExtraIterationsForStack(stack)

        return applyIterations(
            sequence,
            apply.Translation(iterations, to.Translation(from.Cardinal(neededExtraIterations))),
        )
    }

const computeSuperparticularSeriesScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES ].specs)

const computeDuperparticularSeriesScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES ].specs)

const computeSubparticularSeriesScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.SUBPARTICULAR_SERIES ].specs)

const computeDubparticularSeriesScalars: () => Array<Scalar<Frequency>> =
    (): Array<Scalar<Frequency>> =>
        computeScalars(presets[ XenharmonicSeriesPreset.DUBPARTICULAR_SERIES ].specs)

export {
    computeScalars,
    computeSuperparticularSeriesScalars,
    computeDuperparticularSeriesScalars,
    computeSubparticularSeriesScalars,
    computeDubparticularSeriesScalars,
}
