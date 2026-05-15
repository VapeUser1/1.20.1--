ServerEvents.recipes(event=>{
    // 优化: remove1 内曾含重复的 output id，重复 event.remove 无意义，已去重
    var remove1 = [
        'minecraft:crafting_table',
        'minecraft:furnace',
        'minecraft:torch',
        'minecraft:campfire',
        'ceramicbucket:unfired_clay_bucket',
        'minecraft:chest',
        'minecraft:paper',
        'minecraft:leather',
        'tconstruct:copper_can',
        'industrialrenewal:sponge_iron',
        'minecraft:bone_meal',
        'minecraft:compass',
        'create:brass_hand',
        'create:fluid_valve',
        'create:mechanical_pump',
        'create:mechanical_press',
        'create:empty_blaze_burner',
        'create:basin',
        'tconstruct:nether_grout',
        'minecraft:clock',
        'minecraft:tnt',
        'immersiveengineering:hammer',
        'immersiveengineering:ersatz_leather',
        'tconstruct:seared_melter',
        'minecraft:ender_eye',
        'tconstruct:tinkers_anvil',
        'forestry:sturdy_machine',
        'createaddition:rolling_mill',
        'tconstruct:travelers_helmet',
        'forestry:naturalist_helmet',
        'createbigcannons:cannon_drill',
        'thermal:drill_head',
        'thermal:saw_blade',
        'immersiveengineering:rs_engineering',
        'immersiveengineering:heavy_engineering',
        'immersiveengineering:light_engineering',
        'immersiveengineering:radiator',
        'immersiveengineering:generator',
        'immersiveengineering:blastbrick',
        'mekanism:boiler_casing',
        'mekanism:boiler_valve',
        'mekanism:pressure_disperser',
        'mekanism:superheating_element',
        'minecraft:smithing_table',
        'minecraft:gunpowder',
        'minecraft:bread',
        'createbigcannons:basin_foundry_lid',
        'minecraft:spyglass',
        'northstar:telescope',
        'immersiveengineering:cokebrick',
        'minecraft:blaze_powder',
        'minecraft:book',
        'ytech:potters_wheel',
        'ytech:flint_spear',
        'forestry:bee_house',
        'butchersdelight:rack',
        'create:water_wheel',
        'create:large_water_wheel',
        'create:propeller', 
        'vintageimprovements:spring_coiling_machine', 
        'create:windmill_bearing', 'create:mechanical_bearing', 
        'create:mechanical_crafter', 
        'create:sand_paper', 
        'create:piston_extension_pole',
        'create:red_sand_paper', 
        'create:deployer', 
        'create:mechanical_saw', 
        'ytech:iron_bloom', 
        'immersiveengineering:blastbrick_reinforced',
        'create:mechanical_drill', 
        'vintageimprovements:lathe', 
        'thermal:satchel',
        'immersiveengineering:capacitor_lv', 
        'immersiveengineering:capacitor_mv', 
        'immersiveengineering:capacitor_hv',
        'immersiveengineering:watermill',
        'create:wrench',
        '#forge:armors',
        '#forge:tools/bows',
        '#forge:tools/tridents',
        '#forge:tools/crossbows',
        '#forge:tools/swords',
        '#forge:tools/axes',
        '#forge:tools/pickaxes',
        '#forge:tools/shovels',
        '#forge:tools/hoes',
        '#forge:hammers',
        '#forge:plates',
        '#forge:dusts',
        '#forge:gears',
        '#forge:dyes'
    ]
    for (let i of remove1){
        event.remove({type:'minecraft:crafting_shaped',output:`${i}`})
        event.remove({type:'minecraft:crafting_shapeless',output:`${i}`})
    }
    var remove2 = [
        'computercraft',
        'advgenerators',
        'bigreactors',
        'ae2',
        'mts',
        'electrodynamics',
        'exposure',
        'ballistix',
        'musketmod'
    ]
    for (let j of remove2){
        event.remove({mod:`${j}`})
    }
    event.remove({type:'minecraft:crafting_shapeless', input:'minecraft:fire_charge', mod:'thermal'})
    event.remove({input:'immersiveengineering:hammer', output:'#forge:dusts'})
    event.remove({mod:'immersiveengineering', output:'minecraft:paper'})
    event.remove({mod:'ytech', output:'#minecraft:planks', type:'minecraft:crafting_shaped'})
    event.remove({mod:'ytech', output:'#minecraft:planks', type:'minecraft:crafting_shapeless'})
    event.remove({mod:'tconstruct', output:'minecraft:book'})
    event.remove({mod:'farmersdelight', output:'minecraft:book'})
    event.remove({input:'minecraft:sand', output:'immersiveengineering:concrete'})
    event.remove({type:'minecraft:crafting_shaped', output:'create:andesite_alloy'})
    event.shapeless('kubejs:iron_powder', ['create:crushed_raw_iron','#forge:dusts/charcoal','minecraft:glowstone_dust']);
    event.shapeless('tconstruct:nether_grout', ['minecraft:blaze_powder','create:cinder_flour','minecraft:soul_soil']);
    event.shapeless('3x kubejs:raw_fire_clay', ['minecraft:bone_meal','minecraft:clay_ball','minecraft:black_dye','minecraft:redstone']);
    //event.shapeless('immersiveengineering:blastbrick', ['9x kubejs:blast_brick']);
    event.shaped('minecraft:campfire',[
        ['minecraft:air', 'minecraft:stick','minecraft:air'],
        ['minecraft:stick', 'minecraft:cobblestone','minecraft:stick'],
        ['#minecraft:planks', '#minecraft:planks','#minecraft:planks']
    ])
    event.shaped('minecraft:furnace', [
        ['minecraft:cobblestone', 'minecraft:cobblestone','minecraft:cobblestone'],
        ['minecraft:cobblestone', 'minecraft:air','minecraft:cobblestone'],
        ['minecraft:brick', 'minecraft:decorated_pot','minecraft:brick']
    ]);
    event.shaped('tconstruct:seared_melter', [
        ['tconstruct:seared_brick', 'minecraft:glass','tconstruct:seared_brick'],
        ['tconstruct:seared_brick', 'minecraft:air','tconstruct:seared_brick'],
        ['tconstruct:seared_brick', 'minecraft:furnace','tconstruct:seared_brick']
    ]);
    event.shaped('immersiveengineering:hammer', [
        ['minecraft:air', '#forge:ingots/lead','#forge:string'],
        ['minecraft:air', '#forge:rods/wooden','#forge:ingots/lead'],
        ['#forge:rods/wooden', 'minecraft:air','minecraft:air']
    ]);
    event.shaped('create:millstone', [
        ['minecraft:air', 'woodenhopper:wooden_hopper','minecraft:air'],
        ['ytech:pebble', 'minecraft:stone','ytech:pebble'],
        ['minecraft:stone', '#forge:gears/bronze','minecraft:stone']
    ]);
    event.shaped('immersiveengineering:blastbrick', [
        ['kubejs:blast_brick', 'kubejs:blast_brick','minecraft:air'],
        ['kubejs:blast_brick', 'kubejs:blast_brick','minecraft:air'],
        ['minecraft:air', 'minecraft:air','minecraft:air']
    ]);
    event.shaped('minecraft:smithing_table', [
        ['#forge:plates/lead', '#forge:plates/lead','minecraft:air'],
        ['#minecraft:planks', '#minecraft:planks','immersiveengineering:hammer'],
        ['#minecraft:planks', '#minecraft:planks','minecraft:air']
    ]);
    event.shaped('create:copper_valve_handle', [
        ['minecraft:air', '#forge:ingots/copper','minecraft:air'],
        ['#forge:ingots/copper', '#forge:gears/bronze','#forge:ingots/copper'],
        ['minecraft:air', '#forge:ingots/copper','minecraft:air']
    ]);
    event.shaped('create:basin', [
        ['tconstruct:scorched_brick', 'minecraft:air','tconstruct:scorched_brick'],
        ['tconstruct:scorched_brick', 'minecraft:air','tconstruct:scorched_brick'],
        ['tconstruct:scorched_brick', 'tconstruct:scorched_brick','tconstruct:scorched_brick']
    ]);
    event.shaped('create:empty_blaze_burner', [
        ['minecraft:iron_bars', 'minecraft:iron_bars','minecraft:iron_bars'],
        ['minecraft:iron_bars', 'minecraft:air','minecraft:iron_bars'],
        ['tconstruct:scorched_brick', 'tconstruct:scorched_brick','tconstruct:scorched_brick']
    ]);
    event.shaped('ytech:flint_axe', [
        ['minecraft:air', 'ytech:grass_twine','ytech:sharp_flint'],
        ['minecraft:air', 'minecraft:stick','minecraft:air'],
        ['minecraft:air', 'minecraft:air','minecraft:air']
    ]);
    event.shaped('ytech:flint_spear', [
        ['minecraft:air', 'ytech:grass_twine','ytech:sharp_flint'],
        ['minecraft:air', 'minecraft:stick','ytech:grass_twine'],
        ['minecraft:stick', 'minecraft:air','minecraft:air']
    ]);
    event.shaped('ytech:tree_stump', [
        ['minecraft:air', 'minecraft:air','minecraft:air'],
        ['minecraft:air', '#minecraft:logs','ytech:sharp_flint'],
        ['minecraft:air', 'ytech:pebble','ytech:pebble']
    ]);
    event.shaped('ytech:potters_wheel', [
        ['#forge:tools/knives', '#minecraft:planks','#minecraft:axes'],
        ['minecraft:air', '#minecraft:logs','minecraft:air'],
        ['ytech:wooden_plate', 'ytech:wooden_plate','ytech:wooden_plate']
    ]);
    event.shaped('ytech:wooden_box', [
        ['minecraft:air', 'minecraft:air','minecraft:air'],
        ['ytech:wooden_plate', 'minecraft:air','ytech:wooden_plate'],
        ['ytech:wooden_plate', 'ytech:wooden_plate','ytech:wooden_plate']
    ]);
    event.shaped('minecraft:chest', [
        ['ytech:wooden_plate', 'ytech:wooden_plate','ytech:wooden_plate'],
        ['#forge:bolts', 'ytech:wooden_box','#forge:bolts'],
        ['minecraft:air', 'minecraft:air','minecraft:air']
    ]);
    event.shaped('forestry:sturdy_machine', [
        ['#forge:ingots/bronze', '#forge:ingots/bronze','#forge:ingots/bronze'],
        ['#forge:ingots/bronze', '#forge:plates/steel','#forge:ingots/bronze'],
        ['#forge:ingots/bronze', '#forge:ingots/bronze','#forge:ingots/bronze']
    ]);
    event.shaped('forestry:bee_house', [
        ['#minecraft:slabs', '#minecraft:slabs','#minecraft:slabs'],
        ['#minecraft:planks', 'forestry:sturdy_machine','#minecraft:planks'],
        ['#minecraft:planks', '#minecraft:planks','#minecraft:planks']
    ]);
    event.shaped('forestry:impregnated_casing', [
        ['minecraft:air', 'kubejs:impregnated_planks','minecraft:air'],
        ['kubejs:impregnated_planks', 'forestry:sturdy_machine','kubejs:impregnated_planks'],
        ['minecraft:air', 'kubejs:impregnated_planks','minecraft:air']
    ])
    event.shaped('create:mechanical_press',[
        ['minecraft:air' , 'create:cogwheel' , 'minecraft:air'],
        ['minecraft:air' , 'create:andesite_casing', 'minecraft:air'],
        ['minecraft:air' , '#forge:plates/steel', 'minecraft:air']
    ])
    event.shaped('create:wrench',[
        ['minecraft:air', 'minecraft:air', 'forestry:sturdy_machine'],
        ['minecraft:air', '#forge:gears/bronze', 'minecraft:air'],
        ['#forge:rods/iron', 'minecraft:air', 'minecraft:air']
    ])
    event.shaped('create:andesite_casing',[
        ['create:andesite_alloy', 'create:andesite_alloy', 'create:andesite_alloy'],
        ['create:andesite_alloy', '#minecraft:planks', 'create:andesite_alloy'],
        ['create:andesite_alloy', 'create:andesite_alloy', 'create:andesite_alloy']
    ])
    event.shaped('ytech:bronze_anvil',[
        ['#forge:storage_blocks/bronze', '#forge:storage_blocks/bronze', '#forge:storage_blocks/bronze'],
        ['minecraft:air', '#forge:ingots/bronze', 'minecraft:air'],
        ['#forge:ingots/bronze', '#forge:ingots/bronze', '#forge:ingots/bronze']
    ])
    event.shaped('create:brass_casing',[
        ['minecraft:air', '#forge:plates/brass', 'minecraft:air'],
        ['#forge:plates/brass', 'kubejs:impregnated_planks', '#forge:plates/brass'],
        ['minecraft:air', '#forge:plates/brass', 'minecraft:air']
    ])
    event.shaped('immersiveengineering:waterwheel_segment',[
        ['minecraft:air', 'forestry:impregnated_stick', 'minecraft:air'],
        ['forestry:impregnated_stick', 'kubejs:impregnated_planks', 'forestry:impregnated_stick'],
        ['kubejs:impregnated_planks', 'forestry:impregnated_stick', 'kubejs:impregnated_planks']
    ])
    event.shaped('create:large_water_wheel',[
        ['immersiveengineering:waterwheel_segment', 'immersiveengineering:waterwheel_segment', 'immersiveengineering:waterwheel_segment'],
        ['immersiveengineering:waterwheel_segment', '#forge:rods/brass', 'immersiveengineering:waterwheel_segment'],
        ['immersiveengineering:waterwheel_segment', 'immersiveengineering:waterwheel_segment', 'immersiveengineering:waterwheel_segment']
    ])
    event.shaped('tconstruct:copper_can',[
        ['minecraft:air', '#forge:plates/copper', 'minecraft:air'],
        ['#forge:plates/copper', 'forestry:refractory', '#forge:plates/copper'],
        ['minecraft:air', '#forge:plates/copper', 'minecraft:air']
    ])
    event.shaped('minecraft:book',[
        ['minecraft:paper', 'minecraft:paper', 'minecraft:air'],
        ['minecraft:paper', 'ytech:leather_strips', 'minecraft:air'],
        ['minecraft:air', 'minecraft:air', 'minecraft:air']
    ])
    event.shaped('thermal:satchel',[
        ['ytech:leather_strips', '#thermal:rockwool', 'ytech:leather_strips'],
        ['#thermal:rockwool', '#forge:ingots/tin', '#thermal:rockwool'],
        ['ytech:leather_strips', '#thermal:rockwool', 'ytech:leather_strips']
    ])
    event.shaped('3x create:piston_extension_pole',[
        ['minecraft:air', '#forge:gears/iron', 'minecraft:air'],
        ['minecraft:air', '#forge:rods/brass', 'minecraft:air'],
        ['minecraft:air', '#forge:gears/iron', 'minecraft:air']
    ])
    // 优化: 以下为空白 shaped 模板占位，已删去百余行重复注释以减轻解析与维护负担；需要时自行 event.shaped 即可
})