import { SpecDataFor } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { initial } from './initial'
import { presets } from './presets'
import { XenharmonicSeriesSpec } from './types'
import { validationFunction } from './validation'

const specData: SpecDataFor<XenharmonicSeriesSpec> = {
    attributes,
    initial,
    presets,
    validationFunction,
}

export {
    specData,
}
