import { NoteSpec } from '@musical-patterns/compiler'
import { Block, from, INITIAL, Ordinal, to } from '@musical-patterns/utilities'
import { noteCount } from '../custom'
import { XenharmonicSeriesSpec } from '../spec'
import { buildBlock } from './blocks'
import { buildNoteSpec, buildRootNoteSpec } from './notes'

const buildScalePart: (spec: XenharmonicSeriesSpec, stackIndex?: Ordinal) => NoteSpec[] =
    (spec: XenharmonicSeriesSpec, stackIndex: Ordinal = INITIAL): NoteSpec[] => {
        let block: Block = buildBlock(spec, stackIndex)

        if (spec.descending) {
            block = to.Block(block.reverse())
        }

        return block.map(buildNoteSpec)
    }

const buildRootPart: (spec: XenharmonicSeriesSpec) => NoteSpec[] =
    (spec: XenharmonicSeriesSpec): NoteSpec[] =>
        [ buildRootNoteSpec(from.Cardinal(noteCount(spec))) ]

export {
    buildScalePart,
    buildRootPart,
}
