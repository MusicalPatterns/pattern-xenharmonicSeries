import { Exponent, Logarithm, Maybe } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../../spec'
import { FunctionType } from '../../types'

interface ApplyFunctionTypeParameters {
    [ XenharmonicSeriesSpec.FUNCTION_TYPE ]: Maybe<FunctionType>,
    [ XenharmonicSeriesSpec.EXPONENTIAL_BASE ]: Maybe<Logarithm>,
    [ XenharmonicSeriesSpec.LOGARITHMIC_BASE ]: Maybe<Logarithm>,
    [ XenharmonicSeriesSpec.POWER ]: Maybe<Exponent>,
    sequence: number[],
}

export {
    ApplyFunctionTypeParameters,
}
