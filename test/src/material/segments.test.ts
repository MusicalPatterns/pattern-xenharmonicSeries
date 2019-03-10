import { Note } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { apply, forEach, isUndefined, Maybe, Ordinal, to } from '@musical-patterns/utilities'
import { buildSegment, initial, XenharmonicSeriesSpec } from '../../../src/indexForTest'

describe('segments', () => {
    it('can stack translated copies of the scale to create chords as you go up it', () => {
        const stack: number = 2
        const spec: XenharmonicSeriesSpec = {
            ...initial,
            stack: [ 0, stack ].map(to.Ordinal),
        }
        const segment: Segment = buildSegment(spec)

        const notes: Note[] = apply.Ordinal(segment, to.Ordinal(0))
        const stackedNotes: Note[] = apply.Ordinal(segment, to.Ordinal(1))

        forEach(notes, (firstNote: Note, index: Ordinal) => {
            const stackedNote: Note = apply.Ordinal(stackedNotes, index)
            if (firstNote.pitch) {
                const firstPitchIndex: Maybe<Ordinal> = firstNote.pitch.index
                if (!isUndefined(firstPitchIndex) && stackedNote.pitch) {
                    const secondPitchIndex: Maybe<Ordinal> = stackedNote.pitch.index
                    if (secondPitchIndex) {
                        expect(apply.Translation(firstPitchIndex, to.Translation(stack)))
                            .toBe(secondPitchIndex)
                    }
                    else {
                        fail()
                    }
                }
                else {
                    fail()
                }
            }
            else {
                fail()
            }
        })
    })
})
