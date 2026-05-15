ItemEvents.modification(event => {
    event.modify('immersiveengineering:slag', item => {
        item.maxStackSize = 4
    })
})