import {
    DurationOnly,
    Note,
    PitchOnly,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { as, ContourElement, Scalar } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note => ({
        duration: {
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitch: {
            index: as.Ordinal<Scalar>(pitch),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

const computeRootNote: (contourElement: ContourElement<DurationOnly>) => Note =
    ([ duration ]: ContourElement<DurationOnly>): Note => ({
        duration: {
            scalar: as.Scalar<Scalar>(duration),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitch: {
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

export {
    computeNote,
    computeRootNote,
}
