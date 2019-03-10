import { Entity, MaterializeEntities, Note, TimbreNameEnum } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { XenharmonicSeriesSpec } from '../spec'
import { buildRootNotes } from './notes'
import { buildSegment } from './segments'

const materializeEntities: MaterializeEntities =
    (spec: XenharmonicSeriesSpec): Entity[] => {
        const entities: Entity[] = []

        const segment: Segment = buildSegment(spec)
        segment.forEach((notes: Note[]) => {
            entities.push({
                notes,
                timbreName: TimbreNameEnum.GUITAR_FUZZ,
            })
        })

        if (spec.holdRoot) {
            entities.push({
                notes: buildRootNotes(spec),
                timbreName: TimbreNameEnum.CHORUS_STRINGS,
            })
        }

        return entities
    }

export {
    materializeEntities,
}
