import { Note } from '@musical-patterns/compiler'
import { DurationOnly, PitchOnly } from '@musical-patterns/pattern'
import { Block, Cardinal, ContourElement, from, INITIAL, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { computeBlock } from './blocks'
import { computeNoteCount } from './custom'
import { computeNote, computeRootNote } from './features'

const computeScaleNotes: (spec: XenharmonicSeriesSpec, stackIndex?: Ordinal) => Note[] =
    (spec: XenharmonicSeriesSpec, stackIndex: Ordinal = INITIAL): Note[] => {
        let block: Block = computeBlock(spec, stackIndex)

        if (spec.descending) {
            block = to.Block(block.reverse())
        }

        return block
            .map((blockElement: number) => to.ContourElement<PitchOnly>([ blockElement ]))
            .map(computeNote)
    }

const computeRootNotes: (spec: XenharmonicSeriesSpec) => Note[] =
    (spec: XenharmonicSeriesSpec): Note[] => {
        const noteCount: Cardinal = computeNoteCount(spec)
        const rootContour: ContourElement<DurationOnly> = to.ContourElement<DurationOnly>([ from.Cardinal(noteCount) ])

        return [ computeRootNote(rootContour) ]
    }

export {
    computeScaleNotes,
    computeRootNotes,
}
