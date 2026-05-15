MMEvents.registerControllers(event => {
    event.create('lead_chamber').name('Lead Chamber').type('mm:machine')
})
MMEvents.registerPorts(event => {
    event.create("lead_chamber_item")
        .name("Lead Chamber Item Port")
        .controllerId('lead_chamber')
        .config('mm:item', c => {
            c.rows(2).columns(1)
    })
})
MMEvents.registerPorts(event => {
    event.create("lead_chamber_fluid")
        .name("Lead Chamber Fluid Port")
        .controllerId('lead_chamber')
        .config('mm:fluid', c => {
            c.rows(1).columns(1).slotCapacity(1000)
    })
})
