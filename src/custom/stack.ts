import { apply, Cardinal, max, negative, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSequence } from './types'

const calculateNeededExtraIterationsForStack: (stack: Ordinal[], sequence: XenharmonicSequence) => Cardinal =
    (stack: Ordinal[], sequence: XenharmonicSequence): Cardinal => {
        const maxStack: Ordinal = max(...stack)
        let neededExtraIterations: Cardinal = to.Cardinal(0)
        const sequenceLength: Cardinal = to.Cardinal(sequence.length)
        let countOfStackedPitchesWhichStillExceedTheScale: Ordinal = maxStack
        while (countOfStackedPitchesWhichStillExceedTheScale > 0) {
            neededExtraIterations = apply.Translation(neededExtraIterations, to.Translation(1))
            countOfStackedPitchesWhichStillExceedTheScale = apply.Translation(
                countOfStackedPitchesWhichStillExceedTheScale,
                to.Translation(negative(sequenceLength)),
            )
        }

        return neededExtraIterations
    }

export {
    calculateNeededExtraIterationsForStack,
}