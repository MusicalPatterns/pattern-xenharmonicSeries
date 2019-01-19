import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { XenharmonicSeriesPatternSpec } from '../specs'
import { buildPart } from './parts'

const buildEntities: BuildEntitiesFunction =
    (spec: XenharmonicSeriesPatternSpec): Entity[] => {
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
