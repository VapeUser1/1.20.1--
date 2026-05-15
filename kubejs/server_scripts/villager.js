// 优化: 书本检测不必每 tick；无书时移除标签，避免“曾拿过书”永久文明化
// 使用 level.getGameTime() 降频
const CIVILIZED_CHECK_INTERVAL = 40
PlayerEvents.tick(event => {
    if (event.player.level.getGameTime() % CIVILIZED_CHECK_INTERVAL !== 0) return
    const inv = event.player.getInventory()
    if (inv.contains('minecraft:writable_book')) event.player.addTag('civilized')
    else event.player.removeTag('civilized')
})
const VILLAGER_TYPES = new Set(['minecraft:villager', 'minecraft:wandering_trader'])
ItemEvents.entityInteracted(event => {
    const target = event.getTarget().getType()
    if (!VILLAGER_TYPES.has(target)) return
    // 优化: getTags().contains 已是布尔，去掉无意义的 .valueOf(true)
    if (event.player.getTags().contains('civilized')) {
        event.level.playSound(null, event.player.getX(), event.player.getY(), event.player.getZ(), 'minecraft:entity.villager.trade', 'voice', 1, 1)
    } else {
        const tx = event.getTarget().getX()
        const ty = event.getTarget().getY()
        const tz = event.getTarget().getZ()
        event.level.playSound(null, event.player.getX(), event.player.getY(), event.player.getZ(), 'minecraft:entity.villager.no', 'voice', 1, 1)
        // 优化: 复用坐标变量，减少重复 getter 调用
        for (let p = 0; p < 3; p++)
            event.server.runCommandSilent(`particle minecraft:angry_villager ${tx + Math.random()} ${ty + Math.random() + 1.5} ${tz + Math.random()}`)
        event.player.tell('野蛮人滚粗')
        event.cancel()
    }
})