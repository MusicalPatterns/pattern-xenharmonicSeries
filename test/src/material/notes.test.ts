import { computeNotesTotalCompiledDuration, Note } from '@musical-patterns/compiler'
import { STANDARD_DURATIONS_SCALE_INDEX, STANDARD_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { Ms, to } from '@musical-patterns/utilities'
import {
    computeRootNotes,
    computeScaleNotes,
    data,
    materializeScales,
    XenharmonicSeriesProperty,
    XenharmonicSeriesSpec,
} from '../../../src/indexForTest'

describe('notes', () => {
    let spec: XenharmonicSeriesSpec
    beforeEach(() => {
        spec = {
            ...data.initial,
            iterations: to.Cardinal(2),
            lowerBound: to.Ordinal(3),
            upperBound: to.Ordinal(5),
        }
    })

    describe('scale notes', () => {
        it('plays through the whole scale', () => {
            const notes: Note[] = computeScaleNotes(spec)

            expect(notes)
                .toEqual([
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                ])
        })

        it('can descend', () => {
            const reversedSpec: XenharmonicSeriesSpec = {
                ...spec,
                [ XenharmonicSeriesProperty.DESCENDING ]: true,
            }
            const notes: Note[] = computeScaleNotes(reversedSpec)

            expect(notes)
                .toEqual([
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        duration: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { index: to.Ordinal(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                ])
        })
    })

    describe('root notes', () => {
        it('holds the first pitch for the entire duration', () => {
            const rootNotes: Note[] = computeRootNotes(spec)

            expect(rootNotes)
                .toEqual([
                    {
                        duration: { scalar: to.Scalar(6), scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitch: { scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                ])
        })
    })

    it('both sets of notes have the same duration', () => {
        const rootNotesDuration: Ms = computeNotesTotalCompiledDuration(computeRootNotes(spec), materializeScales(spec))
        const scaleNotesDuration: Ms = computeNotesTotalCompiledDuration(computeScaleNotes(spec), materializeScales(spec))

        expect(rootNotesDuration)
            .toBe(scaleNotesDuration)
    })
})
