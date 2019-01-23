import { SpecDataFor } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { matharmonicSeriesSpec, presets } from './presets'
import { XenharmonicSeriesSpec } from './types'
import { validationFunction } from './validation'

const specData: SpecDataFor<XenharmonicSeriesSpec> = {
    attributes,
    initial: matharmonicSeriesSpec,
    presets,
    validationFunction,
}

export {
    specData,
}
