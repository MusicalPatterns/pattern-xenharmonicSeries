import { NoteSpec } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { Index } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { buildScalePart } from './parts'

const buildSegment: (spec: XenharmonicSeriesSpec) => Segment =
    (spec: XenharmonicSeriesSpec): Segment =>
        spec.stack.map((stackIndex: Index): NoteSpec[] =>
            buildScalePart(spec, stackIndex))

export {
    buildSegment,
}
