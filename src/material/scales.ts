import { MaterializeScales, materializeStandardScales, Scales } from '@musical-patterns/material'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: XenharmonicSeriesSpecs): Scales =>
        materializeStandardScales(specs, { pitchScalars: computeScalars(specs) })

export {
    materializeScales,
}
