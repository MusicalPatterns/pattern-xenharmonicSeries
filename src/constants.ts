// tslint:disable:no-magic-numbers

import { Index, Scalar, to } from '@musical-patterns/utilities'

const XENHARMONIC_SERIES_LOWER_BOUND: Index = to.Index(1)
const XENHARMONIC_SERIES_UPPER_BOUND: Index = to.Index(50)

const XENHARMONIC_SERIES_DEFAULT_PITCH: Scalar = to.Scalar(220)

export {
    XENHARMONIC_SERIES_LOWER_BOUND,
    XENHARMONIC_SERIES_UPPER_BOUND,
    XENHARMONIC_SERIES_DEFAULT_PITCH,
}
