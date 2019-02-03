import { from, Scalar, to } from '@musical-patterns/utilities'
import {
    applyIterations,
    applyParticulate,
    buildBoundedNumbers,
    buildSequence,
    getSequenceTypeParameters,
} from '../custom'
import { XenharmonicSeriesSpec } from '../spec'

const buildScalars: (spec: XenharmonicSeriesSpec) => Scalar[] =
    (spec: XenharmonicSeriesSpec): Scalar[] => {
        const { sequenceType, lowerBound, upperBound, iterations, particulate, useParticulate } = spec

        const { initialPartial, operation } = getSequenceTypeParameters(sequenceType)
        const boundedNumbers: number[] = buildBoundedNumbers(lowerBound, to.Index(from.Index(upperBound) + 1))

        let sequence: number[] = buildSequence({ boundedNumbers, spec, initialPartial, operation })

        if (useParticulate) {
            sequence = applyParticulate(sequence, particulate)
        }

        return applyIterations(sequence, iterations)
            .map(to.Scalar)
    }

export {
    buildScalars,
}
