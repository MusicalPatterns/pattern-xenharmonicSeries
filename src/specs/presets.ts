import { PresetFor } from '@musical-patterns/pattern'
import { DictionaryOf, EVERY_OTHER, from, to, TRITAVE } from '@musical-patterns/utilities'
import { THIRD } from './constants'
import { initial } from './initial'
import { SequenceType, XenharmonicSeriesSpec, XenharmonicSeriesSpecProperty } from './types'

const standardHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesSpecProperty.POWER ]: to.Power(0),
}

const sharedEdHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...initial,
    [ XenharmonicSeriesSpecProperty.LOWER_BOUND ]: to.Index(0),
    [ XenharmonicSeriesSpecProperty.SEQUENCE_TYPE ]: SequenceType.PARTIAL_PRODUCT,
    [ XenharmonicSeriesSpecProperty.USE_BASE ]: true,
}

const edTwoHarmonicSeriesSpec: XenharmonicSeriesSpec = sharedEdHarmonicSeriesSpec

const edThreeHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedEdHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.BASE ]: TRITAVE,
}

const edEulerHarmonicSeriesSpec: XenharmonicSeriesSpec = {
    ...sharedEdHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.BASE ]: to.Base(Math.E),
}

const thirdTritaveOddHarmonicsSpec: XenharmonicSeriesSpec = {
    ...standardHarmonicSeriesSpec,
    [ XenharmonicSeriesSpecProperty.CONSTANT ]: from.Count(THIRD) * from.Base(TRITAVE) - from.Scalar(EVERY_OTHER),
    [ XenharmonicSeriesSpecProperty.SCALE_ITERATIONS ]: THIRD,
    [ XenharmonicSeriesSpecProperty.TERM_COEFFICIENT ]: EVERY_OTHER,
    [ XenharmonicSeriesSpecProperty.UPPER_BOUND ]: to.Index(from.Count(THIRD) * from.Base(TRITAVE)),
}

const presets: DictionaryOf<PresetFor<XenharmonicSeriesSpec>> = {
    edEulerHarmonicSeries: {
        formattedName: 'e-edharmonic series',
        order: 5,
        spec: edEulerHarmonicSeriesSpec,
    },
    edThreeHarmonicSeries: {
        formattedName: '3-edharmonic series',
        order: 4,
        spec: edThreeHarmonicSeriesSpec,
    },
    edTwoHarmonicSeries: {
        formattedName: '2-edharmonic series',
        order: 3,
        spec: edTwoHarmonicSeriesSpec,
    },
    matharmonicSeries: {
        order: 2,
        spec: initial,
    },
    standardHarmonicSeries: {
        order: 1,
        spec: standardHarmonicSeriesSpec,
    },
    thirdTritaveOddHarmonics: {
        order: 6,
        spec: thirdTritaveOddHarmonicsSpec,
    },
}

export {
    presets,
}
