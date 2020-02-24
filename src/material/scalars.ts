// tslint:disable-next-line max-line-length
import { ENOUGH_HARMONIC_SERIES_STEPS_TO_LEAVE_HUMAN_HEARING_RANGE_FROM_THREE_OCTAVES_BELOW_PITCH_STANDARD } from '@musical-patterns/material'
import { as, Cardinal, Pitch, Scalar, Thunk, use } from '@musical-patterns/utilities'
import { XenharmonicSequence } from '../nominals'
import { presets, XenharmonicSeriesPreset, XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../spec'
import { applyIterations, computeNeededExtraIterationsForStack, computeSequence } from './custom'

const computeScalars: (specs: XenharmonicSeriesSpecs) => Array<Scalar<Pitch>> =
    (specs: XenharmonicSeriesSpecs): Array<Scalar<Pitch>> => {
        const { iterations, stack } = specs

        const sequence: XenharmonicSequence = computeSequence(specs)

        const neededExtraIterationsForStack: Cardinal<Cardinal<XenharmonicSequence[]>> =
            computeNeededExtraIterationsForStack(stack)

        return applyIterations(
            sequence,
            use.Cardinal(iterations, neededExtraIterationsForStack),
        )
    }

const computeParticularScalars: (preset: XenharmonicSeriesPreset) => Array<Scalar<Pitch>> =
    (preset: XenharmonicSeriesPreset): Array<Scalar<Pitch>> =>
        computeScalars({
            ...presets[ preset ].specs,
            [ XenharmonicSeriesSpec.UPPER_BOUND ]: as.Ordinal(
                ENOUGH_HARMONIC_SERIES_STEPS_TO_LEAVE_HUMAN_HEARING_RANGE_FROM_THREE_OCTAVES_BELOW_PITCH_STANDARD,
            ),
        })

const thunkSuperparticularSeriesScalars: Thunk<Array<Scalar<Pitch>>> =
    (): Array<Scalar<Pitch>> =>
        computeParticularScalars(XenharmonicSeriesPreset.SUPERPARTICULAR_SERIES)

const thunkDuperparticularSeriesScalars: Thunk<Array<Scalar<Pitch>>> =
    (): Array<Scalar<Pitch>> =>
        computeParticularScalars(XenharmonicSeriesPreset.DUPERPARTICULAR_SERIES)

const thunkSubsuperparticularSeriesScalars: Thunk<Array<Scalar<Pitch>>> =
    (): Array<Scalar<Pitch>> =>
        computeParticularScalars(XenharmonicSeriesPreset.SUBSUPERPARTICULAR_SERIES)

const thunkDubduperparticularSeriesScalars: Thunk<Array<Scalar<Pitch>>> =
    (): Array<Scalar<Pitch>> =>
        computeParticularScalars(XenharmonicSeriesPreset.DUBDUPERPARTICULAR_SERIES)

export {
    computeScalars,
    thunkSuperparticularSeriesScalars,
    thunkDuperparticularSeriesScalars,
    thunkSubsuperparticularSeriesScalars,
    thunkDubduperparticularSeriesScalars,
}
