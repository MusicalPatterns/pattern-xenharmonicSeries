import { Entity, MaterializeEntities, Note, TimbreNameEnum } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { XenharmonicSeriesSpec } from '../spec'
import { computeRootNotes } from './notes'
import { computeSegment } from './segments'

const materializeEntities: MaterializeEntities =
    (spec: XenharmonicSeriesSpec): Entity[] => {
        const entities: Entity[] = []

        const segment: Segment = computeSegment(spec)
        segment.forEach((notes: Note[]) => {
            entities.push({
                notes,
                timbreName: TimbreNameEnum.GUITAR_FUZZ,
            })
        })

        if (spec.holdRoot) {
            entities.push({
                notes: computeRootNotes(spec),
                timbreName: TimbreNameEnum.CHORUS_STRINGS,
            })
        }

        return entities
    }

export {
    materializeEntities,
}
