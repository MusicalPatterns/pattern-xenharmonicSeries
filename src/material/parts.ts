import { NoteSpec } from '@musical-patterns/compiler'
import { from } from '@musical-patterns/utilities'
import { duration } from '../custom'
import { XenharmonicSeriesSpec } from '../spec'
import { buildBlock } from './blocks'
import { buildNoteSpec, buildRootNoteSpec } from './notes'

const buildScalePart: (spec: XenharmonicSeriesSpec) => NoteSpec[] =
    (spec: XenharmonicSeriesSpec): NoteSpec[] =>
        buildBlock(spec)
            .map(buildNoteSpec)

const buildRootPart: (spec: XenharmonicSeriesSpec) => NoteSpec[] =
    (spec: XenharmonicSeriesSpec): NoteSpec[] =>
        [ buildRootNoteSpec(from.Time(duration(spec))) ]

export {
    buildScalePart,
    buildRootPart,
}
