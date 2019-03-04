import { NoteSpec } from '@musical-patterns/compiler'
import {
    DurationOnly,
    PitchOnly,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import { ContourElement, to } from '@musical-patterns/utilities'

const buildNoteSpec: (contourElement: ContourElement<PitchOnly>) => NoteSpec =
    ([ pitch ]: ContourElement<PitchOnly>): NoteSpec => ({
        durationSpec: {
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: to.Ordinal(pitch),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

const buildRootNoteSpec: (contourElement: ContourElement<DurationOnly>) => NoteSpec =
    ([ duration ]: ContourElement<DurationOnly>): NoteSpec => ({
        durationSpec: {
            scalar: to.Scalar(duration),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

export {
    buildNoteSpec,
    buildRootNoteSpec,
}
