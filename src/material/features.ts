import {
    Note,
    PitchOnly,
    STANDARD_PITCH_SCALE_INDEX,
    STANDARD_VALUE_SCALE_INDEX,
    ValueOnly,
} from '@musical-patterns/material'
import { as, ContourElement, Pitch, Scalar, Value } from '@musical-patterns/utilities'

const computeNote: (contourElement: ContourElement<PitchOnly>) => Note =
    ([ pitch ]: ContourElement<PitchOnly>): Note => ({
        pitch: {
            index: as.Ordinal<Array<Scalar<Pitch>>>(pitch),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
        value: {
            scaleIndex: STANDARD_VALUE_SCALE_INDEX,
        },
    })

const computeRootNote: (contourElement: ContourElement<ValueOnly>) => Note =
    ([ value ]: ContourElement<ValueOnly>): Note => ({
        pitch: {
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
        value: {
            scalar: as.Scalar<Value>(value),
            scaleIndex: STANDARD_VALUE_SCALE_INDEX,
        },
    })

export {
    computeNote,
    computeRootNote,
}
