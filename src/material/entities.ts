import { Entity, MaterializeEntities, Note, TimbreNameEnum } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { XenharmonicSeriesSpecs } from '../spec'
import { computeRootNotes } from './notes'
import { computeSegment } from './segments'

const materializeEntities: MaterializeEntities =
    (specs: XenharmonicSeriesSpecs): Entity[] => {
        const entities: Entity[] = []

        const segment: Segment = computeSegment(specs)
        segment.forEach((notes: Note[]) => {
            entities.push({
                notes,
                timbreName: TimbreNameEnum.GUITAR_FUZZ,
            })
        })

        if (specs.holdRoot) {
            entities.push({
                notes: computeRootNotes(specs),
                timbreName: TimbreNameEnum.CHORUS_STRINGS,
            })
        }

        return entities
    }

export {
    materializeEntities,
}
