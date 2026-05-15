/*
BlockEvents.rightClicked(event => {
    var data = event.block.getEntityData()
    event.player.tell(data)
})
*/
// 优化: 原逻辑在每次聊天时遍历「全游戏物品 id」，会造成可察觉卡顿；改为按需触发 + 一次性缓存
let cachedPlankIds = null
PlayerEvents.chat(event => {
    if (!event.message.startsWith('!planks')) return
    if (cachedPlankIds === null)
        cachedPlankIds = Ingredient.all.getItemIds().filter(id => /_planks/.test(id))
    for (const id of cachedPlankIds) event.player.tell(id)
})
