// 优化: 合并为单一 spawned 回调，减少事件注册数量
const NO_SPAWN = new Set(['minecraft:slime', 'minecraft:bee'])
EntityEvents.spawned(event => {
    const ent = event.entity ?? event.getEntity?.()
    if (!ent) return
    const id = typeof ent.getType === 'function' ? ent.getType() : String(ent.type)
    if (NO_SPAWN.has(id)) event.cancel()
})