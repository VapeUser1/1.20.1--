ServerEvents.recipes(event=>{
    event.remove({type: 'immersiveengineering:blast_furnace', output: 'immersiveengineering:ingot_steel'})
    event.remove({type: 'immersiveengineering:blast_furnace', output: 'immersiveengineering:storage_steel'})

    //blastfurnace
    event.custom({
        'type': 'immersiveengineering:blast_furnace',
        'input': {'item': 'minecraft:raw_iron_block'},
        'result': {'item': 'ytech:iron_bloom', 'count': 3},
        'slag': {'tag':'forge:slag','count':3},
        'time': 600
     })
    event.custom({
        'type': 'immersiveengineering:blast_furnace',
        'input': {'tag': 'create:stone_types/limestone'},
        'result': {'item': 'kubejs:quicklime', 'count': 3},
        'slag': {'tag':'forge:slag'},
        'time': 400
     })
    event.custom({
        'type': 'immersiveengineering:blast_furnace',
        'input': {'item': 'minecraft:gravel'},
        'result': {'item': 'kubejs:quicklime', 'count': 2},
        'slag': {'tag':'forge:slag'},
        'time': 400
     })
    //alloying
    event.custom({
        "type":"immersiveengineering:alloy",
        "input0":{"item":'create:crushed_raw_zinc'},
        "input1":{
            "type": "forge:nbt",
            "item": 'tconstruct:copper_can',
            "nbt": {"fluid": "forestry:ice"}
        },
        "result":{
            "type": "forge:nbt",
            "item": 'tconstruct:copper_can',
            "nbt": {"fluid": "tconstruct:molten_zinc"}
        },
        "time":400
    })
    event.custom({
        "type":"immersiveengineering:alloy",
        "input0":{"item":'create:crushed_raw_zinc'},
        "input1":{
            "type": "forge:nbt",
            "item": 'tconstruct:copper_can',
            "nbt": {"fluid": "tconstruct:powdered_snow"}
        },
        "result":{
            "type": "forge:nbt",
            "item": 'tconstruct:copper_can',
            "nbt": {"fluid": "tconstruct:molten_zinc"}
        },
        "time":400
    })
})