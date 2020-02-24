// tslint:disable no-magic-numbers

import { as, PHI, reciprocal } from '@musical-patterns/utilities'
import { FunctionType } from '../../types'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { harmonicSeriesSpecs } from './natural'

const sharedSimplePowharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: FunctionType.SIMPLE_POWER,
}

const lesserPhiPowharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedSimplePowharmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.POWER ]: as.Exponent(reciprocal(PHI)),
}

const greaterPhiPowharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedSimplePowharmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.POWER ]: as.Exponent(PHI),
}

export {
    lesserPhiPowharmonicSeriesSpecs,
    greaterPhiPowharmonicSeriesSpecs,
}
