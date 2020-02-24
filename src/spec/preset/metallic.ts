// tslint:disable no-magic-numbers

import { INITIAL } from '@musical-patterns/utilities'
import { NumberSequence } from '../../types'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO } from './constants'
import { harmonicSeriesSpecs } from './natural'

const metallicHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: INITIAL,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO,
    [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]: NumberSequence.METALLIC_NUMBERS,
}

export {
    metallicHarmonicSeriesSpecs,
}
