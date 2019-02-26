import { apply, Cardinal, Frequency, INCLUSIVE, Ordinal, Scalar, to, Translation } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import {
    applyIterations,
    applyParticulate,
    buildBoundedNumbers,
    buildSequence,
    calculateNeededExtraIterationsForStack,
    getSequenceTypeParameters,
    XenharmonicSequence,
} from './custom'

const maybeExtendBoundForParticulate:
    (upperBound: Ordinal, useParticulate: boolean, particulate: Translation) => Ordinal =
    (upperBound: Ordinal, useParticulate: boolean, particulate: Translation): Ordinal =>
        useParticulate ? apply.Translation(upperBound, particulate) : upperBound

const buildScalars: (spec: XenharmonicSeriesSpec) => Array<Scalar<Frequency>> =
    (spec: XenharmonicSeriesSpec): Array<Scalar<Frequency>> => {
        const { sequenceType, lowerBound, upperBound, iterations, particulate, useParticulate, stack } = spec
        const { partialSeed, operation } = getSequenceTypeParameters(sequenceType)
        const boundedNumbers: number[] = buildBoundedNumbers(
            lowerBound,
            apply.Translation(maybeExtendBoundForParticulate(upperBound, useParticulate, particulate), INCLUSIVE),
        )

        let sequence: XenharmonicSequence = buildSequence({ boundedNumbers, spec, partialSeed, operation })

        if (useParticulate) {
            sequence = applyParticulate(sequence, particulate)
        }

        const neededExtraIterations: Cardinal = calculateNeededExtraIterationsForStack(stack, sequence)

        return applyIterations(sequence, apply.Translation(iterations, to.Translation((neededExtraIterations))))
    }

export {
    buildScalars,
}
