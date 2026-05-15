ServerEvents.recipes(event => {
    event.remove({type:'ytech:hammering'})
    event.remove({type:'ytech:tanning', output:'minecraft:leather'})
    event.remove({type:'ytech:workspace_crafting'})
    event.remove({type:'ytech:alloying'})
    event.remove({type:'ytech:smelting'})
    //smelting
    var metal = ['gold','copper','lead','silver','tin']
    for (let i of metal) {
        event.recipes.ytech.smelting('#forge:ingots/'+i, '#forge:raw_materials/'+i)
        event.recipes.ytech.smelting('#forge:ingots/'+i, '#create:crushed_raw_materials/'+i)
    }
    //alloying
    event.recipes.ytech.alloying('4x thermal:bronze_ingot', '3x #forge:ingots/copper', '#forge:ingots/tin')
    //event.recipes.ytech.smelting('minecraft:copper_ingot', 'minecraft:raw_copper')
    event.custom({
            "type": "ytech:hammering",
            "hitCount": 24,
            "ingredient": {
              "item": "ytech:iron_bloom",
            },
            "result": {
              "item": "industrialrenewal:sponge_iron",
              "count":1
            },
            "tool": {
              "tag": "forge:hammers"
            }
    })
    event.custom({
  "type": "ytech:tanning",
  "hitCount": 5,
  "ingredient": {
    "tag": "ytech:furry_hides"
  },
  "result": {
    "item": "ytech:raw_hide"
  },
  "tool": {
    "tag": "forge:shears"
  }
})
})