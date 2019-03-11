import { Note } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { Ordinal } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { computeScaleNotes } from './notes'

const computeSegment: (spec: XenharmonicSeriesSpec) => Segment =
    (spec: XenharmonicSeriesSpec): Segment =>
        spec.stack.map((stackIndex: Ordinal): Note[] =>
            computeScaleNotes(spec, stackIndex))

export {
    computeSegment,
}
