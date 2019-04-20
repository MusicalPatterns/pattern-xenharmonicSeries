import { as, Cardinal, Hz, INCLUSIVE, ofNotAs, Ordinal, Scalar, use } from '@musical-patterns/utilities'
import { PartialSumOrProduct } from '../nominals'
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
    upperBound: Ordinal<PartialSumOrProduct>,
    useParticulate: boolean,
    particulate: Particulate,
) => Ordinal<PartialSumOrProduct> =
    (
        upperBound: Ordinal<PartialSumOrProduct>,
        useParticulate: boolean,
        particulate: Particulate,
    ): Ordinal<PartialSumOrProduct> =>
        useParticulate ? use.Translation(upperBound, particulate) : upperBound

const computeScalars: (specs: XenharmonicSeriesSpecs) => Array<Scalar<Hz>> =
    (specs: XenharmonicSeriesSpecs): Array<Scalar<Hz>> => {
        const { sequenceType, lowerBound, upperBound, iterations, particulate, useParticulate, stack } = specs
        const { partialSeed, operation } = computeSequenceTypeParameters(sequenceType)
        const boundedNumbers: number[] = computeBoundedIntegers(
            lowerBound,
            use.Translation(maybeExtendBoundForParticulate(upperBound, useParticulate, particulate), INCLUSIVE),
        )

        let sequence: XenharmonicSequence = computeSequence({ boundedNumbers, specs, partialSeed, operation })

        if (useParticulate) {
            sequence = applyParticulate(sequence, particulate)
        }

        const neededExtraIterations: Cardinal = computeNeededExtraIterationsForStack(stack)

        return applyIterations(
            sequence,
            use.Translation(iterations, as.Translation(ofNotAs(neededExtraIterations))),
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
