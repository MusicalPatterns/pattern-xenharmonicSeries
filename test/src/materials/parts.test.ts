import { calculateNoteSpecsTotalCompiledDuration, NoteSpec } from '@musical-patterns/compiler'
import { DEFAULT_DURATIONS_SCALE_INDEX, DEFAULT_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { Time, to } from '@musical-patterns/utilities'
import { buildRootPart, buildScalePart, buildScales, specData, XenharmonicSeriesSpec } from '../../../src/indexForTest'

describe('parts', () => {
    let spec: XenharmonicSeriesSpec
    beforeEach(() => {
        spec = {
            ...specData.initial,
            iterations: to.Count(2),
            lowerBound: to.Index(3),
            upperBound: to.Index(5),
        }
    })

    describe('scale part', () => {
        it('plays through the whole scale', () => {
            const part: NoteSpec[] = buildScalePart(spec)

            expect(part)
                .toEqual([
                    {
                        durationSpec: { scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Index(0), scaleIndex: DEFAULT_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Index(1), scaleIndex: DEFAULT_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Index(2), scaleIndex: DEFAULT_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Index(3), scaleIndex: DEFAULT_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Index(4), scaleIndex: DEFAULT_PITCH_SCALE_INDEX },
                    },
                    {
                        durationSpec: { scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX },
                        pitchSpec: { index: to.Index(5), scaleIndex: DEFAULT_PITCH_SCALE_INDEX },
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
                        durationSpec: { scalar: to.Scalar(6), scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX },
                        pitchSpec: { scaleIndex: DEFAULT_PITCH_SCALE_INDEX },
                    },
                ])
        })
    })

    it('both parts have the same duration', () => {
        const rootPartDuration: Time = calculateNoteSpecsTotalCompiledDuration(buildRootPart(spec), buildScales(spec))
        const scalePartDuration: Time = calculateNoteSpecsTotalCompiledDuration(buildScalePart(spec), buildScales(spec))

        expect(rootPartDuration)
            .toBe(scalePartDuration)
    })
})
