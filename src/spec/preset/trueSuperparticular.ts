// tslint:disable no-magic-numbers

import { INITIAL } from '@musical-patterns/utilities'
import { NumberSequence } from '../../types'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO } from './constants'
import { harmonicSeriesSpecs, subharmonicSeriesSpecs } from './natural'

const sharedTrueSuperparticularSpecs: Partial<XenharmonicSeriesSpecs> = {
    [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]: NumberSequence.SUPERPARTICULAR_NUMBERS,
    [ XenharmonicSeriesSpec.LOWER_BOUND ]: INITIAL,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: UPPER_BOUND_GIVING_THIRTYTWO_NOTES_WHEN_LOWER_BOUND_IS_ZERO,

}

const superparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    ...sharedTrueSuperparticularSpecs,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: 1,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 1,
}

const subsuperparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...subharmonicSeriesSpecs,
    ...sharedTrueSuperparticularSpecs,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: 1,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 1,
}

const superbiparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    ...sharedTrueSuperparticularSpecs,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: 1,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 2,
}

const doubleSuperparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    ...sharedTrueSuperparticularSpecs,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: 2,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 1,
}

const doubleSuperbiparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    ...sharedTrueSuperparticularSpecs,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: 2,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 2,
}

export {
    superparticularSeriesSpecs,
    subsuperparticularSeriesSpecs,
    superbiparticularSeriesSpecs,
    doubleSuperbiparticularSeriesSpecs,
    doubleSuperparticularSeriesSpecs,
}
