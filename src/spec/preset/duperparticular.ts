// tslint:disable no-magic-numbers

import { NumberSequence } from '../../types'
import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { harmonicSeriesSpecs, subharmonicSeriesSpecs } from './natural'

const sharedDuperparticularSeriesSpecs: Partial<XenharmonicSeriesSpecs> = {
    [ XenharmonicSeriesSpec.NUMBER_SEQUENCE ]: NumberSequence.SUPERPARTICULAR_NUMBERS,
}

const duperparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    ...sharedDuperparticularSeriesSpecs,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 2,

}

const dubduperparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...subharmonicSeriesSpecs,
    ...sharedDuperparticularSeriesSpecs,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 2,

}

const truperparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...harmonicSeriesSpecs,
    ...sharedDuperparticularSeriesSpecs,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 3,

}

const trubtruperparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...subharmonicSeriesSpecs,
    ...sharedDuperparticularSeriesSpecs,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: 3,
}

export {
    dubduperparticularSeriesSpecs,
    duperparticularSeriesSpecs,
    trubtruperparticularSeriesSpecs,
    truperparticularSeriesSpecs,
}
