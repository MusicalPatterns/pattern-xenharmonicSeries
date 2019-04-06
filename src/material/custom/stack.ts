import { apply, Cardinal, from, max, negative, Ordinal, to, totalElements } from '@musical-patterns/utilities'

const computeNeededExtraIterationsForStack: (stack: Ordinal[]) => Cardinal =
    (stack: Ordinal[]): Cardinal => {
        const maxStack: Ordinal = max(...stack)
        let neededExtraIterations: Cardinal = to.Cardinal(0)
        const sequenceLength: Cardinal = totalElements(stack)
        let countOfStackedPitchesWhichStillExceedTheScale: Ordinal = maxStack
        while (countOfStackedPitchesWhichStillExceedTheScale > 0) {
            neededExtraIterations = apply.Translation(neededExtraIterations, to.Translation(1))
            countOfStackedPitchesWhichStillExceedTheScale = apply.Translation(
                countOfStackedPitchesWhichStillExceedTheScale,
                to.Translation(from.Cardinal(negative(sequenceLength))),
            )
        }

        return neededExtraIterations
    }

export {
    computeNeededExtraIterationsForStack,
}
