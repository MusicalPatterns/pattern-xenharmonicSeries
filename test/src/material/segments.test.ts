import { NoteSpec } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { apply, from, Index, Maybe, to } from '@musical-patterns/utilities'
import { buildSegment, initial, XenharmonicSeriesSpec } from '../../../src/indexForTest'

describe('segments', () => {
    it('can stack offset copies of the scale to create chords as you go up it', () => {
        const spec: XenharmonicSeriesSpec = {
            ...initial,
            stack: [ 0, 2 ].map(to.Index),
        }
        const segment: Segment = buildSegment(spec)

        const firstPart: NoteSpec[] = apply.Index(segment, to.Index(0))
        const secondPart: NoteSpec[] = apply.Index(segment, to.Index(1))

        firstPart.forEach((firstNoteSpec: NoteSpec, index: number) => {
            const secondNoteSpec: NoteSpec = apply.Index(secondPart, to.Index(index))
            if (firstNoteSpec.pitchSpec) {
                const firstPitchIndex: Maybe<Index> = firstNoteSpec.pitchSpec.index
                if (firstPitchIndex !== undefined && secondNoteSpec.pitchSpec) {
                    const secondPitchIndex: Maybe<Index> = secondNoteSpec.pitchSpec.index
                    if (secondPitchIndex) {
                        expect(from.Index(firstPitchIndex) + 2)
                            .toBe(from.Index(secondPitchIndex))
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
