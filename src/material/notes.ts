import { Note } from '@musical-patterns/compiler'
import { DurationOnly, PitchOnly } from '@musical-patterns/pattern'
import { Block, Cardinal, ContourElement, from, INITIAL, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { buildBlock } from './blocks'
import { calculateNoteCount } from './custom'
import { buildNote, buildRootNote } from './features'

const buildScaleNotes: (spec: XenharmonicSeriesSpec, stackIndex?: Ordinal) => Note[] =
    (spec: XenharmonicSeriesSpec, stackIndex: Ordinal = INITIAL): Note[] => {
        let block: Block = buildBlock(spec, stackIndex)

        if (spec.descending) {
            block = to.Block(block.reverse())
        }

        return block
            .map((blockElement: number) => to.ContourElement<PitchOnly>([ blockElement ]))
            .map(buildNote)
    }

const buildRootNotes: (spec: XenharmonicSeriesSpec) => Note[] =
    (spec: XenharmonicSeriesSpec): Note[] => {
        const noteCount: Cardinal = calculateNoteCount(spec)
        const rootContour: ContourElement<DurationOnly> = to.ContourElement<DurationOnly>([ from.Cardinal(noteCount) ])

        return [ buildRootNote(rootContour) ]
    }

export {
    buildScaleNotes,
    buildRootNotes,
}
