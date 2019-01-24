// tslint:disable:no-magic-numbers

import { Frequency, Index, to } from '@musical-patterns/utilities'

const XENHARMONIC_SERIES_LOWER_BOUND: Index = to.Index(1)
const XENHARMONIC_SERIES_UPPER_BOUND: Index = to.Index(32)

const XENHARMONIC_SERIES_BASE_FREQUENCY: Frequency = to.Frequency(220)

export {
    XENHARMONIC_SERIES_LOWER_BOUND,
    XENHARMONIC_SERIES_UPPER_BOUND,
    XENHARMONIC_SERIES_BASE_FREQUENCY,
}
