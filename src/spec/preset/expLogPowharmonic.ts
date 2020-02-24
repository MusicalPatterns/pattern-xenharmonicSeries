// tslint:disable no-magic-numbers

import { as, E } from '@musical-patterns/utilities'
import { FunctionType } from '../../types'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { harmonicSeriesSpecs } from './natural'

const sharedExpLogPowharmonicSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: FunctionType.EXPONENTIAL_OF_LOGARITHMIC_POWER,
}

const lnTwoPowharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedExpLogPowharmonicSpecs,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: E,
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: as.Logarithm(2),
}

const logBaseThreeOfTwoPowharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedExpLogPowharmonicSpecs,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: as.Logarithm(3),
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: as.Logarithm(2),
}
const logBaseTwoOfThreePowharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedExpLogPowharmonicSpecs,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: as.Logarithm(2),
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: as.Logarithm(3),
}

export {
    lnTwoPowharmonicSeriesSpecs,
    logBaseThreeOfTwoPowharmonicSeriesSpecs,
    logBaseTwoOfThreePowharmonicSeriesSpecs,
}
