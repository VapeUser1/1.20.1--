// 优化: 原逻辑每 tick 扫 36 格，多人时浪费严重 → 用世界游戏时间降频 + contains 一次判断
// 使用 level.getGameTime() 降频（避免依赖 player.age 等可能未绑定的字段）
const LOGIN_CHECK_INTERVAL = 20
PlayerEvents.tick(event => {
    if (event.player.level.getGameTime() % LOGIN_CHECK_INTERVAL !== 0) return
    const inv = event.player.getInventory()
    if (inv.contains('ftbquests:missing_item')) event.player.inventory.clear()
})