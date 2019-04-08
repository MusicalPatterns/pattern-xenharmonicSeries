import { MaterializeScales, Scale } from '@musical-patterns/material'
import { materializeStandardScales } from '@musical-patterns/pattern'
import { from, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeScalars } from './scalars'

const materializeScales: MaterializeScales =
    (specs: XenharmonicSeriesSpecs): Scale[] =>
        materializeStandardScales(
            specs,
            {
                pitchScalars: computeScalars(specs)
                    .map(from.Frequency)
                    .map(to.Scalar),
            },
        )

export {
    materializeScales,
}
