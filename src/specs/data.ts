import { PatternSpecData } from '@musical-patterns/pattern'
import { XenharmonicSeriesPatternSpec } from '../types'
import { attributes } from './attributes'
import { matharmonicSeries, presets } from './presets'
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
