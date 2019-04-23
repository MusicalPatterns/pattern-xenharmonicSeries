import { DurationOnly, Note, PitchOnly } from '@musical-patterns/material'
import { as, Block, Cardinal, ContourElement, INITIAL, notAs, Ordinal } from '@musical-patterns/utilities'
import { Stack } from '../nominals'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeBlock } from './blocks'
import { computeNoteCount, XenharmonicSequence } from './custom'
import { computeNote, computeRootNote } from './features'

const computeScaleNotes: (specs: XenharmonicSeriesSpecs, stackIndex?: Ordinal<Stack[]>) => Note[] =
    (specs: XenharmonicSeriesSpecs, stackIndex: Ordinal<Stack[]> = INITIAL): Note[] => {
        let block: Block = computeBlock(specs, stackIndex)

        if (specs.descending) {
            block = as.Block(block.reverse())
        }

        return block
            .map((blockElement: number) => as.ContourElement<PitchOnly>([ blockElement ]))
            .map(computeNote)
    }

const computeRootNotes: (specs: XenharmonicSeriesSpecs) => Note[] =
    (specs: XenharmonicSeriesSpecs): Note[] => {
        const noteCount: Cardinal<XenharmonicSequence> = computeNoteCount(specs)
        const rootContour: ContourElement<DurationOnly> = as.ContourElement<DurationOnly>([ notAs.Cardinal(noteCount) ])

        return [ computeRootNote(rootContour) ]
    }

export {
    computeScaleNotes,
    computeRootNotes,
}
