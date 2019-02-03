import { NoteSpec } from '@musical-patterns/compiler'
import { from, Index, to } from '@musical-patterns/utilities'
import { duration } from '../custom'
import { XenharmonicSeriesSpec } from '../spec'
import { buildBlock } from './blocks'
import { buildNoteSpec, buildRootNoteSpec } from './notes'

const buildScalePart: (spec: XenharmonicSeriesSpec, stackIndex?: Index) => NoteSpec[] =
    (spec: XenharmonicSeriesSpec, stackIndex: Index = to.Index(0)): NoteSpec[] =>
        buildBlock(spec, stackIndex)
            .map(buildNoteSpec)

const buildRootPart: (spec: XenharmonicSeriesSpec) => NoteSpec[] =
    (spec: XenharmonicSeriesSpec): NoteSpec[] =>
        [ buildRootNoteSpec(from.Time(duration(spec))) ]

export {
    buildScalePart,
    buildRootPart,
}
