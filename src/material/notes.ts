import { Note, PitchOnly, ValueOnly } from '@musical-patterns/material'
import {
    as,
    Block,
    computeReverse,
    ContourElement,
    INCLUSIVE,
    INITIAL,
    Integer,
    Ordinal,
    range,
    use,
} from '@musical-patterns/utilities'
import { Stack, XenharmonicSequence } from '../nominals'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeBlock } from './blocks'
import { computeFinalNoteIndex } from './custom'
import { computeNote, computeRootNote } from './features'

const computeScaleNotes: (specs: XenharmonicSeriesSpecs, stackIndex?: Ordinal<Stack[]>) => Note[] =
    (specs: XenharmonicSeriesSpecs, stackIndex: Ordinal<Stack[]> = INITIAL): Note[] => {
        let block: Block = computeBlock(specs, stackIndex)

        if (specs.descending) {
            block = as.Block(computeReverse(block))
        }

        return block
            .map(
                (blockElement: number): ContourElement<PitchOnly> =>
                    as.ContourElement<PitchOnly>([ blockElement ]),
            )
            .map(computeNote)
    }

const computeRootNotes: (specs: XenharmonicSeriesSpecs) => Note[] =
    (specs: XenharmonicSeriesSpecs): Note[] => {
        const end: Ordinal<XenharmonicSequence> = computeFinalNoteIndex(specs)
        const boundedIntegers: Integer[] = range(end, use.Transition(end, INCLUSIVE))

        const rootContour: ContourElement<ValueOnly> = as.ContourElement<ValueOnly>(boundedIntegers)

        return [ computeRootNote(rootContour) ]
    }

export {
    computeScaleNotes,
    computeRootNotes,
}
