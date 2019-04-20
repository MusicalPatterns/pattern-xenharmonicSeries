import { E, INITIAL, TRITAVE } from '@musical-patterns/utilities'
import { SequenceType } from '../../types'
import { initialSpecs } from '../initials'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'

const sharedEdHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initialSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: INITIAL,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType.PARTIAL_PRODUCT,
    [ XenharmonicSeriesSpec.USE_LOGARITHM ]: true,
}

const edTwoHarmonicSeriesSpecs: XenharmonicSeriesSpecs = sharedEdHarmonicSeriesSpecs

const edThreeHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedEdHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOGARITHM ]: TRITAVE,
}

const edEulerHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedEdHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOGARITHM ]: E,
}

export {
    edEulerHarmonicSeriesSpecs,
    edThreeHarmonicSeriesSpecs,
    edTwoHarmonicSeriesSpecs,
}
