import { PatternSpecDataFor } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { matharmonicSeries, presets } from './presets'
import { XenharmonicSeriesPatternSpec } from './types'
import { validationFunction } from './validation'

const specData: PatternSpecDataFor<XenharmonicSeriesPatternSpec> = {
    attributes,
    initial: matharmonicSeries,
    presets,
    validationFunction,
}

export {
    specData,
}
