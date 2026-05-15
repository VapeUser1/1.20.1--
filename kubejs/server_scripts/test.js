/*
BlockEvents.rightClicked(event => {
    var data = event.block.getEntityData()
    event.player.tell(data)
})
*/
PlayerEvents.chat(event => {
    Ingredient.all.getItemIds().forEach(item=>{
        if(/_planks/.test(item)){
            event.player.tell(item)
        }
    })
        
})
