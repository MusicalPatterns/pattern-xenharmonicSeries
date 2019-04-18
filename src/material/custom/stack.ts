import {
    apply,
    Cardinal,
    from,
    max,
    negative,
    ofFrom,
    ONE_MORE,
    Ordinal,
    to,
    totalElements,
} from '@musical-patterns/utilities'

const computeNeededExtraIterationsForStack: (stack: Ordinal[]) => Cardinal =
    (stack: Ordinal[]): Cardinal => {
        const maxStack: Ordinal = max(...stack)
        let neededExtraIterations: Cardinal = to.Cardinal(0)
        const sequenceLength: Cardinal = totalElements(stack)
        let countOfStackedPitchesWhichStillExceedTheScale: Cardinal = to.Cardinal(from.Ordinal(maxStack))
        while (from.Cardinal(countOfStackedPitchesWhichStillExceedTheScale) > 0) {
            neededExtraIterations = apply.Translation(neededExtraIterations, ONE_MORE)
            countOfStackedPitchesWhichStillExceedTheScale = apply.Translation(
                countOfStackedPitchesWhichStillExceedTheScale,
                to.Translation(ofFrom(negative(sequenceLength))),
            )
        }

        return neededExtraIterations
    }

export {
    computeNeededExtraIterationsForStack,
}
