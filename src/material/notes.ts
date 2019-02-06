import { NoteSpec } from '@musical-patterns/compiler'
import { STANDARD_DURATIONS_SCALE_INDEX, STANDARD_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'

const buildNoteSpec: (blockElement: number) => NoteSpec =
    (blockElement: number): NoteSpec => ({
        durationSpec: {
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: to.Ordinal(blockElement),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

const buildRootNoteSpec: (blockElement: number) => NoteSpec =
    (blockElement: number): NoteSpec => ({
        durationSpec: {
            scalar: to.Scalar(blockElement),
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
