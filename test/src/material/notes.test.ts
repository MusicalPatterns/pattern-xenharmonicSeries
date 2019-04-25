import {
    computeNotesTotalCompiledDuration,
    Note,
    STANDARD_DURATION_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import { as, Duration, Pitch, Scalar } from '@musical-patterns/utilities'
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
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
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
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { index: as.Ordinal<Array<Scalar<Pitch>>>(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
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
                        duration: { scalar: as.Scalar<Duration>(6), scaleIndex: STANDARD_DURATION_SCALE_INDEX },
                        pitch: { scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                ])
        })
    })

    it('both sets of notes have the same duration', () => {
        const rootNotesDuration: Duration = computeNotesTotalCompiledDuration(computeRootNotes(specs), materializeScales(specs))
        const scaleNotesDuration: Duration = computeNotesTotalCompiledDuration(computeScaleNotes(specs), materializeScales(specs))

        expect(rootNotesDuration)
            .toBe(scaleNotesDuration)
    })
})
