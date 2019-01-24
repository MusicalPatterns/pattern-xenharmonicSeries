import { SpecDataFor } from '@musical-patterns/pattern'
import { attributes } from './attributes'
import { presets, sharedXenharmonicSeriesSpec } from './presets'
import { XenharmonicSeriesSpec } from './types'
import { validationFunction } from './validation'

const specData: SpecDataFor<XenharmonicSeriesSpec> = {
    attributes,
    initial: sharedXenharmonicSeriesSpec,
    presets,
    validationFunction,
}

export {
    specData,
}
