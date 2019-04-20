import {
    computeNotesTotalCompiledDuration,
    Note,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { as, Ms, Scalar } from '@musical-patterns/utilities'
import {
    computeRootNotes,
    computeScaleNotes,
    materializeScales,
    PartialSumOrProduct,
    spec,
    XenharmonicSeriesSpec,
    XenharmonicSeriesSpecs,
} from '../../../src/indexForTest'

describe('notes', () => {
    let specs: XenharmonicSeriesSpecs
    beforeEach(() => {
        specs = {
            ...spec.initialSpecs,
            iterations: as.Cardinal(2),
            lowerBound: as.Ordinal<PartialSumOrProduct>(3),
            upperBound: as.Ordinal<PartialSumOrProduct>(5),
        }
    })

    describe('scale notes', () => {
        it('plays through the whole scale', () => {
            const notes: Note[] = computeScaleNotes(specs)

            expect(notes)
                .toEqual([
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
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
                        pitch: { index: as.Ordinal<Scalar>(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Scalar>(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
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
                        duration: { scalar: as.Scalar<Scalar>(6), scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
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
