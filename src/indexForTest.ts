// tslint:disable:no-reaching-imports

export {
    buildScalars,
    buildBlock,
    buildScalePart,
    buildRootPart,
    buildScales,
} from './materials/indexForTest'
export {
    specData,
    XenharmonicSeriesSpec,
    SequenceType,
} from './specs'

export { pattern } from './patterns'

// tslint:disable-next-line:no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
