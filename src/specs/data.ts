import { PatternSpecData } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { matharmonicSeries, presets } from './presets'
import { XenharmonicSeriesPatternSpec } from './types'
import { validationFunction } from './validation'

const specData: PatternSpecData<XenharmonicSeriesPatternSpec> = {
    attributes,
    initial: matharmonicSeries,
    presets,
    validationFunction,
}

export {
    specData,
}
