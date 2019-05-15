// tslint:disable-next-line max-line-length
import { ENOUGH_HARMONIC_SERIES_STEPS_TO_LEAVE_HUMAN_HEARING_RANGE_FROM_THREE_OCTAVES_BELOW_PITCH_STANDARD } from '@musical-patterns/material'
import { as, Cardinal, INCLUSIVE, Ordinal, Pitch, Scalar, use } from '@musical-patterns/utilities'
import { presets, XenharmonicSeriesPreset, XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../spec'
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

const computeParticularScalars: (preset: XenharmonicSeriesPreset) => Array<Scalar<Pitch>> =
    (preset: XenharmonicSeriesPreset): Array<Scalar<Pitch>> =>
        computeScalars({
            ...presets[ preset ].specs,
            [ XenharmonicSeriesSpec.UPPER_BOUND ]: as.Ordinal<XenharmonicSequence>(
                ENOUGH_HARMONIC_SERIES_STEPS_TO_LEAVE_HUMAN_HEARING_RANGE_FROM_THREE_OCTAVES_BELOW_PITCH_STANDARD,
            ),
        })

const computeSuperparticularSeriesScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        computeParticularScalars(XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES)

const computeDuperparticularSeriesScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        computeParticularScalars(XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES)

const computeSubparticularSeriesScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        computeParticularScalars(XenharmonicSeriesPreset.SUBPARTICULAR_SERIES)

const computeDubparticularSeriesScalars: () => Array<Scalar<Pitch>> =
    (): Array<Scalar<Pitch>> =>
        computeParticularScalars(XenharmonicSeriesPreset.DUBPARTICULAR_SERIES)

export {
    computeScalars,
    computeSuperparticularSeriesScalars,
    computeDuperparticularSeriesScalars,
    computeSubparticularSeriesScalars,
    computeDubparticularSeriesScalars,
}
