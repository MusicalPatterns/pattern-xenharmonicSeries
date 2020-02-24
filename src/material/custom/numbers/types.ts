import { Block, Maybe, Ordinal } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../../../spec'

interface ComputeNumbersParameters {
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: Maybe<number>,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: Maybe<number>,
    [ XenharmonicSeriesSpec.UPPER_BOUND ]: Ordinal,
}

type ComputeNumbers = (params: ComputeNumbersParameters) => Block

interface ComputeMaybeTrueSuperparticularParameters {
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_DIV ]: number,
    [ XenharmonicSeriesSpec.SUPERPARTICULAR_MOD ]: number,
    num: number,
}

export {
    ComputeNumbersParameters,
    ComputeNumbers,
    ComputeMaybeTrueSuperparticularParameters,
}
