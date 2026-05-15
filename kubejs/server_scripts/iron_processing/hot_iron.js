PlayerEvents.tick(event => {
    var inv = event.player.getInventory()
    for (let i = 0 ; i<36 ; i++){
        var name = inv.getItem(i)
        if (name.is('ytech:iron_bloom').valueOf(true)){
            var damage = name.getDamageValue()
            name.setDamageValue(damage + 1)
            if (damage>256){
                event.player.give(Item.of('industrialrenewal:sponge_iron',name.getCount()))
                name.setCount(0)
            }
        }
    }
})