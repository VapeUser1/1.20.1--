ItemEvents.modification(event => {
    event.modify('ytech:iron_bloom', item => {
        item.maxStackSize = 3
        item.maxDamage = 256
    })
})