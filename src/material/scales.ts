import { MaterializeScales, materializeStandardScales, Scale } from '@musical-patterns/material'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: XenharmonicSeriesSpecs): Scale[] =>
        materializeStandardScales(specs, { pitchScalars: computeScalars(specs) })

export {
    materializeScales,
}
