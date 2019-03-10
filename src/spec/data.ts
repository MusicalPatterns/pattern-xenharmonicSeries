import { Data } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { initial } from './initial'
import { presets } from './presets'
import { XenharmonicSeriesSpec } from './types'
import { validationFunction } from './validation'

const data: Data<XenharmonicSeriesSpec> = {
    attributes,
    initial,
    presets,
    validationFunction,
}

export {
    data,
}
