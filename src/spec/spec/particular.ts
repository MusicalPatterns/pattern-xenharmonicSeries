import { XenharmonicSeriesSpec, XenharmonicSeriesSpecs } from '../types'
import { DUPER_OR_DUB_PARTICULATE } from './constants'
import { standardHarmonicSeriesSpecs, subharmonicSeriesSpecs } from './standard'

const superparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...subharmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: true,
}

const duperparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...superparticularSeriesSpecs,
    [ XenharmonicSeriesSpec.PARTICULATE ]: DUPER_OR_DUB_PARTICULATE,
}

const subparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...standardHarmonicSeriesSpecs,
    [ XenharmonicSeriesSpec.USE_PARTICULATE ]: true,
}

const dubparticularSeriesSpecs: XenharmonicSeriesSpecs = {
    ...subparticularSeriesSpecs,
    [ XenharmonicSeriesSpec.PARTICULATE ]: DUPER_OR_DUB_PARTICULATE,
}

export {
    superparticularSeriesSpecs,
    duperparticularSeriesSpecs,
    subparticularSeriesSpecs,
    dubparticularSeriesSpecs,
}
