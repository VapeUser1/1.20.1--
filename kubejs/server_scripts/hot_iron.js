// 优化: 炽热铁锭「每 tick 每格」处理极耗 CPU → 降频；空槽位跳过；修正耐久阈值判断（原先用递增前旧值与 256 比较，几乎不会触发转化）
const HOT_IRON_INTERVAL = 5
const IRON_BLOOM_MAX = 256
PlayerEvents.tick(event => {
    if (event.player.level.getGameTime() % HOT_IRON_INTERVAL !== 0) return
    const inv = event.player.getInventory()
    for (let i = 0; i < 36; i++) {
        const stack = inv.getItem(i)
        if (stack.isEmpty() || !stack.is('ytech:iron_bloom')) continue
        const damage = stack.getDamageValue()
        // 与降频配合：每次处理补偿 HOT_IRON_INTERVAL 点耐久，使平均升温速率接近「每 tick +1」
        stack.setDamageValue(damage + HOT_IRON_INTERVAL)
        if (stack.getDamageValue() >= IRON_BLOOM_MAX) {
            event.player.give(Item.of('industrialrenewal:sponge_iron', stack.getCount()))
            stack.setCount(0)
        }
    }
})