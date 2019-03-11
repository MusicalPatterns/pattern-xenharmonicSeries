import { Note } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { apply, forEach, Ordinal, to } from '@musical-patterns/utilities'
import { computeSegment, initial, XenharmonicSeriesSpec } from '../../../src/indexForTest'

describe('segments', () => {
    it('can stack translated copies of the scale to create chords as you go up it', () => {
        const stack: number = 2
        const spec: XenharmonicSeriesSpec = {
            ...initial,
            stack: [ 0, stack ].map(to.Ordinal),
        }
        const segment: Segment = computeSegment(spec)

        const notes: Note[] = apply.Ordinal(segment, to.Ordinal(0))
        const stackedNotes: Note[] = apply.Ordinal(segment, to.Ordinal(1))

        forEach(notes, (note: Note, index: Ordinal) => {
            const stackedNote: Note = apply.Ordinal(stackedNotes, index)
            expect(apply.Translation(note.pitch!.index, to.Translation(stack)))
                .toBe(stackedNote.pitch!.index)
        })
    })
})
