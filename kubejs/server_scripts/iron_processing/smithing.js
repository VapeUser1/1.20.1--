BlockEvents.rightClicked('ytech:bronze_anvil', event => {
    var data = event.block.getEntityData()
    var regex = /,id:"ytech:iron_bloom",/ //检测青铜砧上的物品
    var regex2 = /,steel:1b/ //用于检测是否可以生成钢制品
    var p1 = Math.random() //用于确定是否完成锻造
    var p2 = Math.random() //用于确定是否生成钢制
    var parts1 = [
        'tool_binding',
        'tool_handle'
    ] //单耗材部件
    var parts2 = [
        'repair_kit',
        'pick_head',
        'small_axe_head',
        'small_blade',
        'bow_grip',
        'bow_limb',
        'maille',
        'adze_head'
    ] //双耗材部件
    var cast = event.player.getOffHandItem() //副手模板
    if (event.getItem().hasTag('forge:hammers')){
        if (regex.test(data).valueOf(true)){
            //火焰+铁块粒子
            event.server.runCommandSilent(`particle flame ${event.getBlock().getX() + Math.random() } ${event.getBlock().getY() + 1.2} ${event.getBlock().getZ() + Math.random() }`)
            event.server.runCommandSilent(`particle flame ${event.getBlock().getX() + Math.random() } ${event.getBlock().getY() + 1.2} ${event.getBlock().getZ() + Math.random() }`)
            event.server.runCommandSilent(`particle minecraft:block iron_block ${event.getBlock().getX() + Math.random() } ${event.getBlock().getY() + 1} ${event.getBlock().getZ() + Math.random() }`)
            event.server.runCommandSilent(`particle minecraft:block iron_block ${event.getBlock().getX() + Math.random() } ${event.getBlock().getY() + 1} ${event.getBlock().getZ() + Math.random() }`)
            //下面是生成钢制品的
            if ((regex2.test(data).valueOf(true))&&(p2>0.4)){//如果是炒钢法产出的炽热铁且一半概率
                if (p1>0.95){
                    for (let i of parts1) {
                       let template = 'tconstruct:' + `${i}` //确定部件id
                        if (cast.is(template).valueOf(true)){
                            event.block.setEntityData({Item:{Count:2,id:`${template}`,tag:{Material:"tconstruct:steel"}}}) //输出成品
                        }
                    }
                    for (let i of parts2) {
                        let template = 'tconstruct:' + `${i}` //确定部件id
                        if (cast.is(template).valueOf(true)){
                            event.block.setEntityData({Item:{Count:1,id:`${template}`,tag:{Material:"tconstruct:steel"}}}) //输出成品
                        }
                    }
                    //锭输出
                    if (cast.hasTag('forge:ingots').valueOf(true)){
                        event.block.setEntityData({Item:{Count:2,id:'immersiveengineering:ingot_steel'}}) 
                    }
                    //板输出
                    if (cast.hasTag('forge:plates').valueOf(true)){
                        event.block.setEntityData({Item:{Count:2,id:'immersiveengineering:plate_steel'}})
                    }
                }
            }
            //下面是生成熟铁的
            else{
                if (p1>0.95){
                    for (let i of parts1) {
                        let template = 'tconstruct:' + `${i}` //确定部件id
                        if (cast.is(template).valueOf(true)){
                            event.block.setEntityData({Item:{Count:2,id:`${template}`,tag:{Material:"tconstruct:iron"}}}) //输出成品
                        }
                    }
                    for (let i of parts2) {
                        let template = 'tconstruct:' + `${i}` //确定部件id
                        if (cast.is(template).valueOf(true)){
                            event.block.setEntityData({Item:{Count:1,id:`${template}`,tag:{Material:"tconstruct:iron"}}}) //输出成品
                        }
                    }
                    //锭输出
                    if (cast.hasTag('forge:ingots').valueOf(true)){
                        event.block.setEntityData({Item:{Count:2,id:"minecraft:iron_ingot"}}) 
                    }
                    //板输出
                    if (cast.hasTag('forge:plates').valueOf(true)){
                        event.block.setEntityData({Item:{Count:2,id:"create:iron_sheet"}})
                    }
                }
            }
        }
    }
})