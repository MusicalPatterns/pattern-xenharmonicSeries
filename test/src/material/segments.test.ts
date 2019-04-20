import { Note, Segment } from '@musical-patterns/material'
import { as, forEach, Ordinal, Scalar, use } from '@musical-patterns/utilities'
import { computeSegment, initialSpecs, XenharmonicSeriesSpecs } from '../../../src/indexForTest'

describe('segments', () => {
    it('can stack translated copies of the scale to create chords as you go up it', () => {
        const stack: number = 2
        const specs: XenharmonicSeriesSpecs = {
            ...initialSpecs,
            stack: [ 0, stack ].map(as.Ordinal),
        }
        const segment: Segment = computeSegment(specs)

        const notes: Note[] = use.Ordinal(segment, as.Ordinal<Note[]>(0))
        const stackedNotes: Note[] = use.Ordinal(segment, as.Ordinal<Note[]>(1))

        forEach(notes, (note: Note, index: Ordinal<Note>) => {
            const stackedNote: Note = use.Ordinal(stackedNotes, index)
            expect(use.Translation(note.pitch!.index, as.Translation<Ordinal<Scalar>>(stack)))
                .toBe(stackedNote.pitch!.index)
        })
    })
})
