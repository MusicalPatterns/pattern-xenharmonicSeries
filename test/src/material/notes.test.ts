import {
    computeNotesTotalCompiledDuration,
    Note,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { Ms, Scalar, to } from '@musical-patterns/utilities'
import {
    computeRootNotes,
    computeScaleNotes,
    materializeScales, PartialSumOrProduct,
    spec,
    XenharmonicSeriesSpec,
    XenharmonicSeriesSpecs,
} from '../../../src/indexForTest'

describe('notes', () => {
    let specs: XenharmonicSeriesSpecs
    beforeEach(() => {
        specs = {
            ...spec.initialSpecs,
            iterations: to.Cardinal(2),
            lowerBound: to.Ordinal<PartialSumOrProduct>(3),
            upperBound: to.Ordinal<PartialSumOrProduct>(5),
        }
    })

    describe('scale notes', () => {
        it('plays through the whole scale', () => {
            const notes: Note[] = computeScaleNotes(specs)

            expect(notes)
                .toEqual([
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
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
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal<Scalar>(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                ])
        })
    })

    describe('root notes', () => {
        it('holds the first pitch for the entire duration', () => {
            const rootNotes: Note[] = computeRootNotes(specs)

            expect(rootNotes)
                .toEqual([
                    {
                        duration: { scalar: to.Scalar<Scalar>(6), scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                ])
        })
    })

    it('both sets of notes have the same duration', () => {
        const rootNotesDuration: Ms = computeNotesTotalCompiledDuration(computeRootNotes(specs), materializeScales(specs))
        const scaleNotesDuration: Ms = computeNotesTotalCompiledDuration(computeScaleNotes(specs), materializeScales(specs))

        expect(rootNotesDuration)
            .toBe(scaleNotesDuration)
    })
})
