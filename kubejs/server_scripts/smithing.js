// 优化: 抽取粒子与坐标缓存；锻造输出仍按原顺序「多次独立 if」，避免与原版「后写覆盖前写」行为不一致
BlockEvents.rightClicked('ytech:bronze_anvil', event => {
    const data = event.block.getEntityData()
    const regex = /,id:"ytech:iron_bloom",/ // 检测青铜砧上的物品
    const regex2 = /,steel:1b/ // 用于检测是否可以生成钢制品
    const p1 = Math.random() // 用于确定是否完成锻造
    const p2 = Math.random() // 用于确定是否生成钢制
    const parts1 = ['tool_binding', 'tool_handle'] // 单耗材部件
    const parts2 = [
        'repair_kit',
        'pick_head',
        'small_axe_head',
        'small_blade',
        'bow_grip',
        'bow_limb',
        'maille',
        'adze_head'
    ] // 双耗材部件
    const cast = event.player.getOffHandItem() // 副手模板
    if (!event.getItem().hasTag('forge:hammers')) return
    if (!regex.test(data)) return

    const bx = event.getBlock().getX()
    const by = event.getBlock().getY()
    const bz = event.getBlock().getZ()
    event.server.runCommandSilent(`particle flame ${bx + Math.random()} ${by + 1.2} ${bz + Math.random()}`)
    event.server.runCommandSilent(`particle flame ${bx + Math.random()} ${by + 1.2} ${bz + Math.random()}`)
    event.server.runCommandSilent(`particle minecraft:block iron_block ${bx + Math.random()} ${by + 1} ${bz + Math.random()}`)
    event.server.runCommandSilent(`particle minecraft:block iron_block ${bx + Math.random()} ${by + 1} ${bz + Math.random()}`)

    const applyForging = (material, ingotId, plateId) => {
        for (const part of parts1) {
            const template = 'tconstruct:' + part
            if (cast.is(template))
                event.block.setEntityData({ Item: { Count: 2, id: template, tag: { Material: material } } })
        }
        for (const part of parts2) {
            const template = 'tconstruct:' + part
            if (cast.is(template))
                event.block.setEntityData({ Item: { Count: 1, id: template, tag: { Material: material } } })
        }
        if (cast.hasTag('forge:ingots'))
            event.block.setEntityData({ Item: { Count: 2, id: ingotId } })
        if (cast.hasTag('forge:plates'))
            event.block.setEntityData({ Item: { Count: 2, id: plateId } })
    }

    if (regex2.test(data) && p2 > 0.4) {
        if (p1 > 0.95) applyForging('tconstruct:steel', 'immersiveengineering:ingot_steel', 'immersiveengineering:plate_steel')
    } else if (p1 > 0.95) {
        applyForging('tconstruct:iron', 'minecraft:iron_ingot', 'create:iron_sheet')
    }
})
