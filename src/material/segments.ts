import { Note } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { Ordinal } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { buildScaleNotes } from './notes'

const buildSegment: (spec: XenharmonicSeriesSpec) => Segment =
    (spec: XenharmonicSeriesSpec): Segment =>
        spec.stack.map((stackIndex: Ordinal): Note[] =>
            buildScaleNotes(spec, stackIndex))

export {
    buildSegment,
}
