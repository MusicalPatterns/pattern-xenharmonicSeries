import { BuildEntitiesFunction, Entity, NoteSpec, TimbreNameEnum } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { XenharmonicSeriesSpec } from '../spec'
import { buildRootPart } from './parts'
import { buildSegment } from './segments'

const buildEntities: BuildEntitiesFunction =
    (spec: XenharmonicSeriesSpec): Entity[] => {
        const entities: Entity[] = []

        const segment: Segment = buildSegment(spec)
        segment.forEach((noteSpecs: NoteSpec[]) => {
            entities.push({
                noteSpecs,
                timbreName: TimbreNameEnum.GUITAR_FUZZ,
            })
        })

        if (spec.holdRoot) {
            entities.push({
                noteSpecs: buildRootPart(spec),
                timbreName: TimbreNameEnum.CHORUS_STRINGS,
            })
        }

        return entities
    }

export {
    buildEntities,
}
