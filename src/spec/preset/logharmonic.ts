// tslint:disable no-magic-numbers

import { as, E, PHI } from '@musical-patterns/utilities'
import { FunctionType } from '../../types'
import { MINIMUM_LOWER_BOUND_WITH_LOGARITHMIC_FUNCTION_TYPE } from '../constants'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { harmonicSeriesSpecs } from './natural'

const sharedLogharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: MINIMUM_LOWER_BOUND_WITH_LOGARITHMIC_FUNCTION_TYPE,
    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: FunctionType.LOGARITHMIC,
}

const logharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedLogharmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: E,
}

const twoLogharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedLogharmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: as.Logarithm(2),
}

const threeLogharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedLogharmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: as.Logarithm(3),
}

const phiLogharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedLogharmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: as.Logarithm(PHI),
}

export {
    logharmonicSeriesSpecs,
    twoLogharmonicSeriesSpecs,
    threeLogharmonicSeriesSpecs,
    phiLogharmonicSeriesSpecs,
}
