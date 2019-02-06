import { from, Scalar, to } from '@musical-patterns/utilities'
import {
    applyIterations,
    applyParticulate,
    buildBoundedNumbers,
    buildSequence,
    getSequenceTypeParameters,
    XenharmonicSequence,
} from '../custom'
import { XenharmonicSeriesSpec } from '../spec'

const buildScalars: (spec: XenharmonicSeriesSpec) => Scalar[] =
    (spec: XenharmonicSeriesSpec): Scalar[] => {
        const { sequenceType, lowerBound, upperBound, iterations, particulate, useParticulate } = spec

        const { partialSeed, operation } = getSequenceTypeParameters(sequenceType)
        const boundedNumbers: number[] = buildBoundedNumbers(lowerBound, to.Ordinal(from.Ordinal(upperBound) + 1))

        let sequence: XenharmonicSequence = buildSequence({ boundedNumbers, spec, partialSeed, operation })

        if (useParticulate) {
            sequence = applyParticulate(sequence, particulate)
        }

        return applyIterations(sequence, iterations)
    }

export {
    buildScalars,
}
