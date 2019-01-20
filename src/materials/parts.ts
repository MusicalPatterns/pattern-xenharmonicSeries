import { NoteSpec } from '@musical-patterns/compiler'
import { XenharmonicSeriesSpec } from '../specs'
import { buildBlock } from './blocks'
import { buildNoteSpec } from './notes'

const buildPart: (spec: XenharmonicSeriesSpec) => NoteSpec[] =
    (spec: XenharmonicSeriesSpec): NoteSpec[] =>
        buildBlock(spec)
            .map(buildNoteSpec)

export {
    buildPart,
}
