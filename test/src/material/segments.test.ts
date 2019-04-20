import { Note, Segment } from '@musical-patterns/material'
import { apply, forEach, Ordinal, Scalar, to } from '@musical-patterns/utilities'
import { computeSegment, initialSpecs, XenharmonicSeriesSpecs } from '../../../src/indexForTest'

describe('segments', () => {
    it('can stack translated copies of the scale to create chords as you go up it', () => {
        const stack: number = 2
        const specs: XenharmonicSeriesSpecs = {
            ...initialSpecs,
            stack: [ 0, stack ].map(to.Ordinal),
        }
        const segment: Segment = computeSegment(specs)

        const notes: Note[] = apply.Ordinal(segment, to.Ordinal<Note[]>(0))
        const stackedNotes: Note[] = apply.Ordinal(segment, to.Ordinal<Note[]>(1))

        forEach(notes, (note: Note, index: Ordinal<Note>) => {
            const stackedNote: Note = apply.Ordinal(stackedNotes, index)
            expect(apply.Translation(note.pitch!.index, to.Translation<Ordinal<Scalar>>(stack)))
                .toBe(stackedNote.pitch!.index)
        })
    })
})
