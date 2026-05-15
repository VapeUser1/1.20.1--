// 优化: forge:gems/amethyst 标签已迁至 tags.js，避免多处重复注册

BlockEvents.rightClicked('minecraft:obsidian', event => {
  if (event.getItem().hasTag("forge:gems/amethyst")){
    event.block.set('minecraft:crying_obsidian')
    var x = event.block.getX()
    var y = event.block.getY()
    var z = event.block.getZ()
    event.level.playSound(null, x,y,z,'minecraft:block.glass.break', 'voice',1,1)
    event.server.runCommandSilent(`particle portal ${x+Math.random()} ${y+Math.random()} ${z+Math.random()}`)
    event.server.runCommandSilent(`particle portal ${x+Math.random()} ${y+Math.random()} ${z+Math.random()}`)
    event.server.runCommandSilent(`particle portal ${x+Math.random()} ${y+Math.random()} ${z+Math.random()}`)
    event.server.runCommandSilent(`particle portal ${x+Math.random()} ${y+Math.random()} ${z+Math.random()}`)
    event.server.runCommandSilent(`particle portal ${x+Math.random()} ${y+Math.random()} ${z+Math.random()}`)
    }
})