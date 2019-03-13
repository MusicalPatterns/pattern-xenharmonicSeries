import { E, INITIAL, TRITAVE } from '@musical-patterns/utilities'
import { initial } from '../initials'
import { SequenceType, XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'

const sharedEdHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initial,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: INITIAL,
    [ XenharmonicSeriesSpec.SEQUENCE_TYPE ]: SequenceType.PARTIAL_PRODUCT,
    [ XenharmonicSeriesSpec.USE_BASE ]: true,
}

const edTwoHarmonicSeriesSpecs: XenharmonicSeriesSpecs = sharedEdHarmonicSeriesSpecs

const edThreeHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedEdHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.BASE ]: TRITAVE,
}

const edEulerHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedEdHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.BASE ]: E,
}

export {
    edEulerHarmonicSeriesSpecs,
    edThreeHarmonicSeriesSpecs,
    edTwoHarmonicSeriesSpecs,
}
