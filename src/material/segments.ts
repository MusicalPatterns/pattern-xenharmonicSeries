import { Note } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { Ordinal } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeScaleNotes } from './notes'

const computeSegment: (specs: XenharmonicSeriesSpecs) => Segment =
    (specs: XenharmonicSeriesSpecs): Segment =>
        specs.stack.map((stackIndex: Ordinal): Note[] =>
            computeScaleNotes(specs, stackIndex))

export {
    computeSegment,
}
