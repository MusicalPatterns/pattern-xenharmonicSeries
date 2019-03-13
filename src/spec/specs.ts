import { Spec } from '@musical-patterns/pattern'
import { configurations } from './configurations'
import { initial } from './initials'
import { presets } from './presets'
import { XenharmonicSeriesSpecs } from './types'
import { computeValidations } from './validations'

const spec: Spec<XenharmonicSeriesSpecs> = {
    computeValidations,
    configurations,
    initial,
    presets,
}

export {
    spec,
}
