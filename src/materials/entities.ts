import { BuildEntitiesFunction, Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { XenharmonicSeriesSpec } from '../specs'
import { buildRootPart, buildScalePart } from './parts'

const buildEntities: BuildEntitiesFunction =
    (spec: XenharmonicSeriesSpec): Entity[] => {
        const rootEntity: Entity = {
            noteSpecs: buildRootPart(spec),
            timbreName: TimbreNameEnum.CHORUS_STRINGS,
        }

        const scaleEntity: Entity = {
            noteSpecs: buildScalePart(spec),
            timbreName: TimbreNameEnum.GUITAR_FUZZ,
        }

        return [
            rootEntity,
            scaleEntity,
        ]
    }

export {
    buildEntities,
}
