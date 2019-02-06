import { NoteSpec } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { Ordinal } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { buildScalePart } from './parts'

const buildSegment: (spec: XenharmonicSeriesSpec) => Segment =
    (spec: XenharmonicSeriesSpec): Segment =>
        spec.stack.map((stackIndex: Ordinal): NoteSpec[] =>
            buildScalePart(spec, stackIndex))

export {
    buildSegment,
}
