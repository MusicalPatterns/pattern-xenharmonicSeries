import { NoteSpec } from '@musical-patterns/compiler'
import { DEFAULT_DURATIONS_SCALE_INDEX, DEFAULT_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { offsetFromOneIndexedToZeroIndexed, to } from '@musical-patterns/utilities'

const buildNoteSpec: (blockElement: number) => NoteSpec =
    (blockElement: number): NoteSpec => ({
        durationSpec: {
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: offsetFromOneIndexedToZeroIndexed(to.Index(blockElement)),
            scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
        },
    })

export {
    buildNoteSpec,
}
