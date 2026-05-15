MMEvents.registerControllers(event => {
    event.create('assembly_line').name('Assembly line').type('mm:machine')
})
MMEvents.registerPorts(event => {
    event.create("assembly_line_item")
        .name("Assembly line Item Port")
        .controllerId('assembly_line')
        .config('mm:item', c => {
            c.rows(1).columns(1)
    })
})
MMEvents.registerPorts(event => {
    event.create("assembly_line_fluid")
        .name("Assembly line Fluid Port")
        .controllerId('assembly_line')
        .config('mm:fluid', c => {
            c.rows(1).columns(1).slotCapacity(1000)
    })
})
MMEvents.registerPorts(event => {
    event.create("assembly_line_energy")
        .name("Assembly line Energy Port")
        .controllerId('assembly_line')
        .config('mm:energy', c => {
            c.capacity(1024).maxReceive(1024).maxExtract(1024)
    })
})