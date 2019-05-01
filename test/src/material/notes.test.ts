import {
    computeNotesDuration,
    Note,
} from '@musical-patterns/material'
import { as, Duration, Pitch, Scalar, Value } from '@musical-patterns/utilities'
import {
    computeRootNotes,
    computeScaleNotes,
    materializeScales,
    spec,
    XenharmonicSequence,
    XenharmonicSeriesSpec,
    XenharmonicSeriesSpecs,
} from '../../../src/indexForTest'

describe('notes', () => {
    let specs: XenharmonicSeriesSpecs
    beforeEach(() => {
        specs = {
            ...spec.initialSpecs,
            iterations: as.Cardinal<XenharmonicSequence[]>(2),
            lowerBound: as.Ordinal<XenharmonicSequence>(3),
            upperBound: as.Ordinal<XenharmonicSequence>(5),
        }
    })

    describe('scale notes', () => {
        it('plays through the whole scale', () => {
            const notes: Note[] = computeScaleNotes(specs)

            expect(notes)
                .toEqual([
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(0) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(1) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(2) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(3) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(4) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(5) },
                    },
                ])
        })

        it('can descend', () => {
            const reversedSpecs: XenharmonicSeriesSpecs = {
                ...specs,
                [ XenharmonicSeriesSpec.DESCENDING ]: true,
            }
            const notes: Note[] = computeScaleNotes(reversedSpecs)

            expect(notes)
                .toEqual([
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(5) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(4) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(3) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(2) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(1) },
                    },
                    {
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(0) },
                    },
                ])
        })
    })

    describe('root notes', () => {
        it('holds the first pitch for the entire value', () => {
            const rootNotes: Note[] = computeRootNotes(specs)

            expect(rootNotes)
                .toEqual([
                    {
                        value: { scalar: as.Scalar<Value>(6) },
                    },
                ])
        })
    })

    it('both sets of notes have the same value', () => {
        const rootNotesDuration: Duration = computeNotesDuration(computeRootNotes(specs), materializeScales(specs))
        const scaleNotesDuration: Duration = computeNotesDuration(computeScaleNotes(specs), materializeScales(specs))

        expect(rootNotesDuration)
            .toBe(scaleNotesDuration)
    })
})
