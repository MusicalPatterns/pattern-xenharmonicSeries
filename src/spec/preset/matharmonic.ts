// tslint:disable no-magic-numbers

import { as, asRational, INITIAL } from '@musical-patterns/utilities'
import { initialSpecs } from '../initials'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO } from './constants'

const matharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initialSpecs,
}

const emulatoryMatharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initialSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: INITIAL,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO,
    [ XenharmonicSeriesSpec.INITIAL_VALUE_OVERRIDE ]: as.Scalar(1),
    [ XenharmonicSeriesSpec.COEFFICIENT ]: asRational(2, 1),
}

export {
    matharmonicSeriesSpecs,
    emulatoryMatharmonicSeriesSpecs,
}
