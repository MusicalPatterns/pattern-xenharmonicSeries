import { to } from '@musical-patterns/utilities'
import { initial } from '../initials'
import { SequenceType, XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'

const standardHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initial,
    [ XenharmonicSeriesSpec.POWER ]: to.Power(0),
}

const subharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initial,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType.SEQUENCE,
}

export {
    standardHarmonicSeriesSpecs,
    subharmonicSeriesSpecs,
}
