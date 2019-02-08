import { calculateNoteSpecsTotalCompiledDuration, NoteSpec } from '@musical-patterns/compiler'
import { STANDARD_DURATIONS_SCALE_INDEX, STANDARD_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { Ms, to } from '@musical-patterns/utilities'
import {
    buildRootPart,
    buildScalePart,
    buildScales,
    specData,
    XenharmonicSeriesSpec,
    XenharmonicSeriesSpecProperty,
} from '../../../src/indexForTest'

describe('parts', () => {
    let spec: XenharmonicSeriesSpec
    beforeEach(() => {
        spec = {
            ...specData.initial,
            iterations: to.Cardinal(2),
            lowerBound: to.Ordinal(3),
            upperBound: to.Ordinal(5),
        }
    })

    describe('scale part', () => {
        it('plays through the whole scale', () => {
            const part: NoteSpec[] = buildScalePart(spec)

            expect(part)
                .toEqual([
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                ])
        })

        it('can descend', () => {
            const reversedSpec: XenharmonicSeriesSpec = {
                ...spec,
                [ XenharmonicSeriesSpecProperty.DESCENDING ]: true,
            }
            const part: NoteSpec[] = buildScalePart(reversedSpec)

            expect(part)
                .toEqual([
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(5), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(4), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(3), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(2), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(1), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Ordinal(0), scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                ])
        })
    })

    describe('root part', () => {
        it('holds the first pitch for the entire duration', () => {
            const rootPart: NoteSpec[] = buildRootPart(spec)

            expect(rootPart)
                .toEqual([
                    {
                        durationSpec: { scalar: to.Scalar(6), scaleIndex: STANDARD_DURATIONS_SCALE_INDEX },
                        pitchSpec: { scaleIndex: STANDARD_PITCH_SCALE_INDEX },
                    },
                ])
        })
    })

    it('both parts have the same duration', () => {
        const rootPartDuration: Ms = calculateNoteSpecsTotalCompiledDuration(buildRootPart(spec), buildScales(spec))
        const scalePartDuration: Ms = calculateNoteSpecsTotalCompiledDuration(buildScalePart(spec), buildScales(spec))

        expect(rootPartDuration)
            .toBe(scalePartDuration)
    })
})
