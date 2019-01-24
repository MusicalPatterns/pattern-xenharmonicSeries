import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { XenharmonicSeriesSpec } from '../spec'
import { buildRootPart, buildScalePart } from './parts'

const buildEntities: BuildEntitiesFunction =
    (spec: XenharmonicSeriesSpec): Entity[] => {
        const entities: Entity[] = [
            {
                noteSpecs: buildScalePart(spec),
                timbreName: TimbreNameEnum.GUITAR_FUZZ,
            },
        ]

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
