import { NoteSpec } from '@musical-patterns/compiler'
import { from, numbers, offsetFromOneIndexedToZeroIndexed } from '@musical-patterns/utilities'
import { XenharmonicSeriesPatternSpec } from '../specs'
import { buildNoteSpec } from './notes'

const buildPart: (spec: XenharmonicSeriesPatternSpec) => NoteSpec[] =
    ({ lowerBound, upperBound }: XenharmonicSeriesPatternSpec): NoteSpec[] => {
        const boundedNumbers: number[] = numbers
            .slice(from.Index(offsetFromOneIndexedToZeroIndexed(lowerBound)), from.Index(upperBound))

        return boundedNumbers.map(buildNoteSpec)
    }

export {
    buildPart,
}
