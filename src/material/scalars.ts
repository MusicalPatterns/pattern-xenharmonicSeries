import { apply, INCLUSIVE, Ordinal, Scalar, Translation } from '@musical-patterns/utilities'
import {
    applyIterations,
    applyParticulate,
    buildBoundedNumbers,
    buildSequence,
    getSequenceTypeParameters,
    XenharmonicSequence,
} from '../custom'
import { XenharmonicSeriesSpec } from '../spec'

const maybeExtendBoundForParticulate:
    (upperBound: Ordinal, useParticulate: boolean, particulate: Translation) => Ordinal =
    (upperBound: Ordinal, useParticulate: boolean, particulate: Translation): Ordinal =>
        useParticulate ? apply.Translation(upperBound, particulate) : upperBound

const buildScalars: (spec: XenharmonicSeriesSpec) => Scalar[] =
    (spec: XenharmonicSeriesSpec): Scalar[] => {
        const { sequenceType, lowerBound, upperBound, iterations, particulate, useParticulate } = spec

        const { partialSeed, operation } = getSequenceTypeParameters(sequenceType)
        const boundedNumbers: number[] = buildBoundedNumbers(
            lowerBound,
            apply.Translation(maybeExtendBoundForParticulate(upperBound, useParticulate, particulate), INCLUSIVE),
        )

        let sequence: XenharmonicSequence = buildSequence({ boundedNumbers, spec, partialSeed, operation })

        if (useParticulate) {
            sequence = applyParticulate(sequence, particulate)
        }

        return applyIterations(sequence, iterations)
    }

export {
    buildScalars,
}
