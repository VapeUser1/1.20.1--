// 禁止蜜蜂（与原先一致）
EntityEvents.spawned('minecraft:bee', event => {
    event.cancel()
})

EntityEvents.spawned('minecraft:slime', event => {
    event.cancel()
})
