// tslint:disable no-magic-numbers

import { StandardSpec } from '@musical-patterns/spec'
import { NumberSequence } from '../../types'
import { initialSpecs } from '../initials'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { SUBHARMONIC_INITIAL_HZ_PHYSICALIZATION } from './constants'

const sharedNaturalHarmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...initialSpecs,
    [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]: NumberSequence.NATURAL_NUMBERS,

}

const harmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedNaturalHarmonicSeriesSpecs,
}

const subharmonicSeriesSpecs: XenharmonicSeriesSpecs = {
    ...sharedNaturalHarmonicSeriesSpecs,
    [ StandardSpec.HZ_PHYSICALIZATION ]: SUBHARMONIC_INITIAL_HZ_PHYSICALIZATION,
    [ XenharmonicSeriesSpec.RECIPROCATE ]: true,
}

export {
    harmonicSeriesSpecs,
    subharmonicSeriesSpecs,
}
