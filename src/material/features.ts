import { Note, PitchOnly, ValueOnly } from '@musical-patterns/material'
import { as, ContourElement, Pitch, Scalar, Value } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note => ({
        pitch: {
            index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
        },
    })

const computeRootNote: (contourElement: ContourElement<ValueOnly>) => Note =
    ([ value ]: ContourElement<ValueOnly>): Note => ({
        value: {
            scalar: as.Scalar<Value>(value),
        },
    })

export {
    computeNote,
    computeRootNote,
}
