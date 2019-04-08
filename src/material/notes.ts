import { Note } from '@musical-patterns/material'
import { DurationOnly, PitchOnly } from '@musical-patterns/pattern'
import { Block, Cardinal, ContourElement, from, INITIAL, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeBlock } from './blocks'
import { computeNoteCount } from './custom'
import { computeNote, computeRootNote } from './features'

const computeScaleNotes: (specs: XenharmonicSeriesSpecs, stackIndex?: Ordinal) => Note[] =
    (specs: XenharmonicSeriesSpecs, stackIndex: Ordinal = INITIAL): Note[] => {
        let block: Block = computeBlock(specs, stackIndex)

        if (specs.descending) {
            block = to.Block(block.reverse())
        }

        return block
            .map((blockElement: number) => to.ContourElement<PitchOnly>([ blockElement ]))
            .map(computeNote)
    }

const computeRootNotes: (specs: XenharmonicSeriesSpecs) => Note[] =
    (specs: XenharmonicSeriesSpecs): Note[] => {
        const noteCount: Cardinal = computeNoteCount(specs)
        const rootContour: ContourElement<DurationOnly> = to.ContourElement<DurationOnly>([ from.Cardinal(noteCount) ])

        return [ computeRootNote(rootContour) ]
    }

export {
    computeScaleNotes,
    computeRootNotes,
}
