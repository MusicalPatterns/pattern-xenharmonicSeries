import {
    as,
    Cardinal,
    length,
    max,
    negative,
    notAs,
    ofNotAs,
    ONE_MORE,
    Ordinal,
    use,
} from '@musical-patterns/utilities'

const computeNeededExtraIterationsForStack: (stack: Ordinal[]) => Cardinal =
    (stack: Ordinal[]): Cardinal => {
        const maxStack: Ordinal = max(...stack)
        let neededExtraIterations: Cardinal = as.Cardinal(0)
        const sequenceLength: Cardinal<Ordinal> = length(stack)
        let countOfStackedPitchesWhichStillExceedTheScale: Cardinal<Ordinal> = as.Cardinal(ofNotAs(maxStack))
        while (notAs.Cardinal(countOfStackedPitchesWhichStillExceedTheScale) > 0) {
            neededExtraIterations = use.Translation(neededExtraIterations, ONE_MORE)
            countOfStackedPitchesWhichStillExceedTheScale = use.Translation(
                countOfStackedPitchesWhichStillExceedTheScale,
                as.Translation(ofNotAs(negative(sequenceLength))),
            )
        }

        return neededExtraIterations
    }

export {
    computeNeededExtraIterationsForStack,
}
