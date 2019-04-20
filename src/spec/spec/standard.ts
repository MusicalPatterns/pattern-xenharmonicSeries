import { as } from '@musical-patterns/utilities'
import { SequenceType } from '../../types'
import { initialSpecs } from '../initials'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'

const standardHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initialSpecs,
    [ XenharmonicSeriesSpec.EXPONENT ]: as.Exponent(0),
}

const subharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initialSpecs,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType.SEQUENCE,
}

export {
    standardHarmonicSeriesSpecs,
    subharmonicSeriesSpecs,
}
