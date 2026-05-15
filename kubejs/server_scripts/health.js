/*
ServerEvents.tick(event => {
    event.server.runCommandSilent(`effect give @e[tag=h1] minecraft:slowness 1 4 true`)
    event.server.runCommandSilent(`effect give @e[tag=h1] minecraft:darkness 3 1 true`)
    if (Math.random() > 0.97){
        event.server.runCommandSilent(`effect give @e[tag=h1] tconstruct:bleeding 1 1 false`)
    }
    event.server.runCommandSilent(`effect give @e[tag=h2] minecraft:slowness 1 2 true`)
})
PlayerEvents.tick(event => {
    var name = event.player.getUsername()
    if (event.player.getInventory().contains('ftbquests:missing_item')){
        event.server.runCommandSilent(`clear ${name}`)
    }
})
ServerEvents.tick(event => {
    event.server.getEntities().forEach(c => {
        var nbt = c.getNbt()
        var regex = /Health:/
        var blacklist = ['minecraft:player', 'minecraft:item', 'minecraft:experience_orb']
        if (regex.test(nbt) == true){
            if (blacklist.indexOf(c.getType()) == -1){
                var mh = c.getMaxHealth()
                var h0 = c.getHealth()
                if (mh/h0 >= 2){
                    c.addTag('h2')
                    c.removeTag('h1')
                    c.removeTag('h3')
                }
                if (mh/h0 >= 3){
                    c.addTag('h1')
                    c.removeTag('h2')
                    c.removeTag('h3')
                }
                if (mh/h0 <2){
                    c.addTag('h3')
                    c.removeTag('h1')
                    c.removeTag('h2')
                }
            }
            if (c.getType() == 'minecraft:player'){
                var h = c.getHealth()
                if (h > 10){
                    c.addTag('h3')
                    c.removeTag('h1')
                    c.removeTag('h2')
                }
                if (h <= 10){
                    c.addTag('h2')
                    c.removeTag('h1')
                    c.removeTag('h3')
                }
                if (h <= 10/3){
                    c.addTag('h1')
                    c.removeTag('h2')
                    c.removeTag('h3')
                }
            }
        }
    })
})
PlayerEvents.respawned(event => {
    event.player.removeAllEffects()
})

PlayerEvents.chat(event => {
    var hp = event.player.getHealth()
    event.player.tell(hp)
})
*/