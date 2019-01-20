import { SpecDataFor } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { matharmonicSeries, presets } from './presets'
import { XenharmonicSeriesSpec } from './types'
import { validationFunction } from './validation'

const specData: SpecDataFor<XenharmonicSeriesSpec> = {
    attributes,
    initial: matharmonicSeries,
    presets,
    validationFunction,
}

export {
    specData,
}
