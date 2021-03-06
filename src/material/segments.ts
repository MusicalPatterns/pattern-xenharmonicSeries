import { Note, Segment } from '@musical-patterns/material'
import { Ordinal } from '@musical-patterns/utilities'
import { Stack } from '../nominals'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeScaleNotes } from './notes'

const computeSegment: (specs: XenharmonicSeriesSpecs) => Segment =
    (specs: XenharmonicSeriesSpecs): Segment =>
        specs.stack.map((stackIndex: Ordinal<Stack[]>): Note[] =>
            computeScaleNotes(specs, stackIndex))

export {
    computeSegment,
}
