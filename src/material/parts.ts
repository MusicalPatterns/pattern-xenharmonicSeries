import { NoteSpec } from '@musical-patterns/compiler'
import { DurationOnly, PitchOnly } from '@musical-patterns/pattern'
import { Block, Cardinal, ContourElement, from, INITIAL, Ordinal, to } from '@musical-patterns/utilities'
import { XenharmonicSeriesSpec } from '../spec'
import { buildBlock } from './blocks'
import { calculateNoteCount } from './custom'
import { buildNoteSpec, buildRootNoteSpec } from './notes'

const buildScalePart: (spec: XenharmonicSeriesSpec, stackIndex?: Ordinal) => NoteSpec[] =
    (spec: XenharmonicSeriesSpec, stackIndex: Ordinal = INITIAL): NoteSpec[] => {
        let block: Block = buildBlock(spec, stackIndex)

        if (spec.descending) {
            block = to.Block(block.reverse())
        }

        return block
            .map((blockElement: number) => to.ContourElement<PitchOnly>([ blockElement ]))
            .map(buildNoteSpec)
    }

const buildRootPart: (spec: XenharmonicSeriesSpec) => NoteSpec[] =
    (spec: XenharmonicSeriesSpec): NoteSpec[] => {
        const noteCount: Cardinal = calculateNoteCount(spec)
        const rootContour: ContourElement<DurationOnly> = to.ContourElement<DurationOnly>([ from.Cardinal(noteCount) ])

        return [ buildRootNoteSpec(rootContour) ]
    }

export {
    buildScalePart,
    buildRootPart,
}
