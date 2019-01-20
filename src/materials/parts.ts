import { NoteSpec } from '@musical-patterns/compiler'
import { XenharmonicSeriesPatternSpec } from '../specs'
import { buildBlock } from './blocks'
import { buildNoteSpec } from './notes'

const buildPart: (spec: XenharmonicSeriesPatternSpec) => NoteSpec[] =
    (spec: XenharmonicSeriesPatternSpec): NoteSpec[] =>
        buildBlock(spec)
            .map(buildNoteSpec)

export {
    buildPart,
}
