import {
    apply,
    Cardinal,
    from,
    length,
    max,
    negative,
    ofFrom,
    ONE_MORE,
    Ordinal,
    to,
} from '@musical-patterns/utilities'

const computeNeededExtraIterationsForStack: (stack: Ordinal[]) => Cardinal =
    (stack: Ordinal[]): Cardinal => {
        const maxStack: Ordinal = max(...stack)
        let neededExtraIterations: Cardinal = to.Cardinal(0)
        const sequenceLength: Cardinal<Ordinal> = length(stack)
        let countOfStackedPitchesWhichStillExceedTheScale: Cardinal<Ordinal> = to.Cardinal(ofFrom(maxStack))
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
