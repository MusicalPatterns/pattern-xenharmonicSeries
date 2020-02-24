// tslint:disable no-magic-numbers

import { as, INITIAL } from '@musical-patterns/utilities'
import { FunctionType } from '../../types'
import { initialSpecs } from '../initials'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO } from './constants'

const sharedEdHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initialSpecs,
    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: FunctionType.EXPONENTIAL,
}

const edThreeHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedEdHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: as.Logarithm(3),
}

const edTwoHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedEdHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: as.Logarithm(2),
}

const emulatoryEdTwoHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedEdHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: INITIAL,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO,
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: as.Logarithm(2),
}

export {
    edThreeHarmonicSeriesSpecs,
    edTwoHarmonicSeriesSpecs,
    emulatoryEdTwoHarmonicSeriesSpecs,
}
