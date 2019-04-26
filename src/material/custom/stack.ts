import {
    as,
    Cardinal,
    INCREMENT,
    insteadOf,
    length,
    max,
    negative,
    Ordinal,
    use,
} from '@musical-patterns/utilities'
import { Stack } from '../../nominals'
import { XenharmonicSequence } from './types'

const computeNeededExtraIterationsForStack:
    (stack: Array<Ordinal<Stack[]>>) => Cardinal<Cardinal<XenharmonicSequence[]>> =
    (stack: Array<Ordinal<Stack[]>>): Cardinal<Cardinal<XenharmonicSequence[]>> => {
        const maxStack: Ordinal<Stack[]> = max(...stack)
        const stackCount: Cardinal<Array<Ordinal<Stack[]>>> = length(stack)

        let neededExtraIterations: Cardinal<Cardinal<XenharmonicSequence[]>> =
            as.Cardinal<Cardinal<XenharmonicSequence[]>>(0)
        let countOfStackedPitchesWhichStillExceedTheScale: Cardinal<XenharmonicSequence[]> =
            as.Cardinal<XenharmonicSequence[]>(as.number(maxStack))

        while (as.number(countOfStackedPitchesWhichStillExceedTheScale) > 0) {
            neededExtraIterations = use.Cardinal(neededExtraIterations, INCREMENT)
            countOfStackedPitchesWhichStillExceedTheScale = use.Cardinal(
                countOfStackedPitchesWhichStillExceedTheScale,
                insteadOf<Cardinal, Cardinal<XenharmonicSequence[]>>(negative(stackCount)),
            )
        }

        return neededExtraIterations
    }

export {
    computeNeededExtraIterationsForStack,
}
