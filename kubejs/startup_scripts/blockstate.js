BlockEvents.modification(event => {
    event.modify('minecraft:amethyst_cluster', block => {
      block.requiresTool = true
    })
    event.modify('minecraft:obsidian', block => {
      block.destroySpeed = 2
      block.explosionResistance = 30
      block.soundType = 'amethyst'
    })
    event.modify('minecraft:crying_obsidian', block => {
      block.destroySpeed = 2
      block.explosionResistance = 30
      block.soundType = 'amethyst'
    })
})
  