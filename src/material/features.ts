import { Note } from '@musical-patterns/material'
import {
    DurationOnly,
    PitchOnly,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import { ContourElement, to } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note => ({
        duration: {
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitch: {
            index: to.Ordinal(pitch),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

const computeRootNote: (contourElement: ContourElement<DurationOnly>) => Note =
    ([ duration ]: ContourElement<DurationOnly>): Note => ({
        duration: {
            scalar: to.Scalar(duration),
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
