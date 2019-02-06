import { NoteSpec } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { apply, from, Maybe, Ordinal, to } from '@musical-patterns/utilities'
import { buildSegment, initial, XenharmonicSeriesSpec } from '../../../src/indexForTest'

describe('segments', () => {
    it('can stack translated copies of the scale to create chords as you go up it', () => {
        const spec: XenharmonicSeriesSpec = {
            ...initial,
            stack: [ 0, 2 ].map(to.Ordinal),
        }
        const segment: Segment = buildSegment(spec)

        const firstPart: NoteSpec[] = apply.Ordinal(segment, to.Ordinal(0))
        const secondPart: NoteSpec[] = apply.Ordinal(segment, to.Ordinal(1))

        firstPart.forEach((firstNoteSpec: NoteSpec, index: number) => {
            const secondNoteSpec: NoteSpec = apply.Ordinal(secondPart, to.Ordinal(index))
            if (firstNoteSpec.pitchSpec) {
                const firstPitchIndex: Maybe<Ordinal> = firstNoteSpec.pitchSpec.index
                if (firstPitchIndex !== undefined && secondNoteSpec.pitchSpec) {
                    const secondPitchIndex: Maybe<Ordinal> = secondNoteSpec.pitchSpec.index
                    if (secondPitchIndex) {
                        expect(from.Ordinal(firstPitchIndex) + 2)
                            .toBe(from.Ordinal(secondPitchIndex))
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
