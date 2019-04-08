import { Spec } from '@musical-patterns/spec'
import { configurations } from './configurations'
import { initialSpecs } from './initials'
import { presets } from './presets'
import { XenharmonicSeriesSpecs } from './types'
import { computeValidations } from './validations'

const spec: Spec<XenharmonicSeriesSpecs> = {
    computeValidations,
    configurations,
    initialSpecs,
    presets,
}

export {
    spec,
}
