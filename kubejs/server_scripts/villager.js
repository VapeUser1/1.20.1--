PlayerEvents.tick(event => {
    var inv = event.player.getInventory()
    if (inv.contains('minecraft:writable_book')){
        event.player.addTag('civilized')
    }
})
ItemEvents.entityInteracted(event => {
    var target = event.getTarget().getType()
    //event.player.tell(target)
    var villagerlist = ['minecraft:villager', 'minecraft:wandering_trader']
    if (villagerlist.indexOf(target)!=-1){
        //event.player.tell('xxx')
        var stage = event.player.getTags()
        if (stage.contains('civilized').valueOf(true)){
            event.level.playSound(null, event.player.getX(), event.player.getY(), event.player.getZ(), 'minecraft:entity.villager.trade', 'voice', 1, 1)
            //event.player.tell('xxx')
        }
        else {
            event.level.playSound(null, event.player.getX(), event.player.getY(), event.player.getZ(), 'minecraft:entity.villager.no', 'voice', 1, 1)
            event.server.runCommandSilent(`particle minecraft:angry_villager ${event.getTarget().getX()+Math.random()} ${event.getTarget().getY()+Math.random()+1.5} ${event.getTarget().getZ()+Math.random()}`)
            event.server.runCommandSilent(`particle minecraft:angry_villager ${event.getTarget().getX()+Math.random()} ${event.getTarget().getY()+Math.random()+1.5} ${event.getTarget().getZ()+Math.random()}`)
            event.server.runCommandSilent(`particle minecraft:angry_villager ${event.getTarget().getX()+Math.random()} ${event.getTarget().getY()+Math.random()+1.5} ${event.getTarget().getZ()+Math.random()}`)
            event.player.tell('野蛮人滚粗')
            event.cancel()
        }
    }
})