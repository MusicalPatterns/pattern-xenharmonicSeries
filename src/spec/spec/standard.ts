import { to } from '@musical-patterns/utilities'
import { initialSpecs } from '../initials'
import { SequenceType, XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'

const standardHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initialSpecs,
    [ XenharmonicSeriesSpec.POWER ]: to.Power(0),
}

const subharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initialSpecs,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType.SEQUENCE,
}

export {
    standardHarmonicSeriesSpecs,
    subharmonicSeriesSpecs,
}
