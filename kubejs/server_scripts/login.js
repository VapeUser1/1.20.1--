PlayerEvents.tick(event => {
    var inv = event.player.getInventory()
    for(let i=0;i<36;i++){
        if(inv.getItem(i)=='ftbquests:missing_item'){
            //event.player.tell('123')
            event.player.inventory.clear()
        }
    }
})