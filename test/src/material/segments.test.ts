import { Note, Segment } from '@musical-patterns/material'
import { as, forEach, Ordinal, Pitch, Scalar, use } from '@musical-patterns/utilities'
import { computeSegment, initialSpecs, Stack, XenharmonicSeriesSpecs } from '../../../src/indexForTest'

describe('segments', () => {
    it('can stack translated copies of the scale to create chords as you go up it', () => {
        const stack: number = 2
        const specs: XenharmonicSeriesSpecs = {
            ...initialSpecs,
            stack: [ 0, stack ].map((value: number) => as.Ordinal<Stack[]>(value)),
        }
        const segment: Segment = computeSegment(specs)

        const notes: Note[] = use.Ordinal(segment, as.Ordinal<Segment>(0))
        const stackedNotes: Note[] = use.Ordinal(segment, as.Ordinal<Segment>(1))

        forEach(notes, (note: Note, index: Ordinal<Note[]>) => {
            const stackedNote: Note = use.Ordinal(stackedNotes, index)
            expect(use.Cardinal(note.pitch!.index!, as.Cardinal<Ordinal<Array<Scalar<Pitch>>>>(stack)))
                .toBe(stackedNote.pitch!.index!)
        })
    })
})
