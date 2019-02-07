import { NoteSpec } from '@musical-patterns/compiler'
import { STANDARD_DURATIONS_SCALE_INDEX, STANDARD_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { to } from '@musical-patterns/utilities'

const buildNoteSpec: (cell: number) => NoteSpec =
    (cell: number): NoteSpec => ({
        durationSpec: {
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: to.Ordinal(cell),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

const buildRootNoteSpec: (cell: number) => NoteSpec =
    (cell: number): NoteSpec => ({
        durationSpec: {
            scalar: to.Scalar(cell),
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
