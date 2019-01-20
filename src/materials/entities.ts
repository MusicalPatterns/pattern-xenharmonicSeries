import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { XenharmonicSeriesSpec } from '../specs'
import { buildPart } from './parts'

const buildEntities: BuildEntitiesFunction =
    (spec: XenharmonicSeriesSpec): Entity[] => {
        const entity: Entity = {
            noteSpecs: buildPart(spec),
            timbreName: TimbreNameEnum.GUITAR_FUZZ,
        }

        return [
            entity,
        ]
    }

export {
    buildEntities,
}
