ServerEvents.recipes(event =>{
    //compacting
    var remove1 = [
        'createbigcannons:cast_iron_ingot',
        'createbigcannons:nethersteel_ingot',
        '#forge:ingots/steel',
        '#forge:ingots/bronze',
        'create:blaze_cake_base',
    ]
    for (let i of remove1){
        event.remove({type:'create:compacting', output:`${i}`})
    }
    event.remove({type:'create:compacting', output:Fluid.of('createaddition:seed_oil')})
    event.remove({type:'create:compacting', output:'createbigcannons:nethersteel_nugget'})
    event.remove({type:'create:compacting', output:'createbigcannons:cast_iron_nugget'})
    event.recipes.create.compacting(['create:blaze_cake_base'], ['create:cinder_flour','forestry:refractory_wax','minecraft:sugar'])
    event.recipes.create.compacting([Fluid.of('createaddition:seed_oil').withAmount(100)], ['frycooks_delight:canola_seeds'])
    event.recipes.create.compacting([Fluid.of('createaddition:seed_oil').withAmount(100)], ['vegandelight:soybean'])
    event.recipes.create.compacting(['immersiveengineering:cokebrick'], ['3x nuclearcraft:graphite_dust','3x minecraft:clay_ball','3x mekanism:dust_quartz'])
    event.recipes.create.compacting(['kubejs:paperpulp'], [Fluid.of('kubejs:paper_pulp').withAmount(125)])
    /*
    Ingredient.all.getItemIds().forEach(i => {
        if (Item.of(i).hasTag('tconstruct:parts') == true){
            event.custom({
                "type": "create:compacting",
                "heatRequirement": "heated",
                "ingredients": [
                    {
                      "item": "forestry:ash"
                    },
                    {
                      "type": "forge:nbt",
                      "item": i,
                      "nbt": {"Material": "tconstruct:iron"}
                    }
                  ],
                  "results": [
                    {
                      "chance": 0.8,
                      "type": "forge:nbt",
                      "item": i,
                      "nbt": {"Material": "tconstruct:steel"}
                    }
                  ]
            })
        }
    })
    */
    event.recipes.create.compacting([Item.of('immersiveengineering:ingot_steel').withChance(0.8)], ['minecraft:iron_ingot', 'forestry:ash']).heated()
    //crushing
    event.recipes.create.crushing([Item.of('thermal:niter_dust').withChance(0.8), 'thermal:niter_dust'], 'thermal:niter')
    event.recipes.create.crushing(['mekanism:dust_quartz'], 'minecraft:quartz')
    event.recipes.create.crushing(['mekanism:dust_charcoal'], '#forge:charcoal')
    //filling
    event.remove({type:'create:filling', output:'minecraft:gunpowder'})
    //milling
    event.recipes.create.milling(['create:cinder_flour', Item.of('create:cinder_flour').withChance(0.5)], 'minecraft:netherrack')
    event.recipes.create.milling(['thermal:niter_dust'], 'thermal:niter')
    event.recipes.create.milling(['mekanism:dust_charcoal'], '#forge:charcoal')
    var materials = [
        'iron',
        'copper',
        'gold',
        'silver',
        'lead',
        'zinc',
        'tin',
        'uranium',
        'nickel',
        'aluminum',
        'platinum',
        'osmium'
    ]
    for (let i of materials){
        var result = 'create:crushed_raw_' + `${i}`
        var input1 = '#forge:raw_materials/' + `${i}`
        var input2 = '#forge:ores/' + `${i}`
        var input3 = '#forge:storage_blocks/raw_' + `${i}`
        event.recipes.create.milling(result, input1)
        event.recipes.create.milling(result, input2)
        event.recipes.create.milling('9x ' + result, input3)
    }
    //mixing
    event.remove({type:'create:mixing', output:'#forge:ingots'});
    event.remove({type:'create:mixing', output:'minecraft:gunpowder'});
    event.remove({type:'create:mixing', output:'#c:ingots/nethersteel'});
    event.recipes.create.mixing(['immersiveengineering:slag', Item.of('ytech:iron_bloom', '{steel:true}')], ['create:crushed_raw_iron', Fluid.of('createbigcannons:molten_cast_iron').withAmount(90)]).heated()
    event.recipes.create.mixing([Fluid.of('forestry:ice').withAmount(1000)], ['thermal:niter_dust','#forge:clay',Fluid.water(1000)])
    event.recipes.create.mixing(['3x minecraft:gunpowder'], ['2x thermal:niter_dust','mekanism:dust_charcoal','immersiveengineering:dust_sulfur']).superheated()
    event.recipes.create.mixing([Fluid.of('kubejs:paper_pulp').withAmount(1000) ], ['kubejs:hydratedlime','2x forestry:wood_pulp',Fluid.water(1000)])
    event.recipes.create.mixing(['minecraft:leather'], [Fluid.of('minecraft:water').withAmount(250), '#minecraft:leaves', 'farmersdelight:tree_bark', 'ytech:raw_hide'], 1000)
    //splashing
    event.remove({type:'create:splashing', output:'#forge:dusts'})
    event.remove({type:'create:splashing', output:'#forge:nuggets'})
    event.recipes.create.splashing(['nuclearcraft:graphite_dust', Item.of('forestry:ash').withChance(0.3)], '#forge:dusts/charcoal')
    event.recipes.create.splashing(['nuclearcraft:graphite_dust', Item.of('immersiveengineering:slag').withChance(0.1)], '#forge:dusts/coal_coke')
    //pressing
    event.remove({type:'create:pressing', output:'minecraft:paper'})
    //hand
    event.remove({type:'create:item_application'})
    //cbc melting
    event.remove({type:'createbigcannons:melting'})
    //mechanical crafting
    event.remove({type: 'create:mechanical_crafting', output: 'steampowered:steel_steam_engine'})
    event.remove({type: 'create:mechanical_crafting', output: 'steampowered:cast_iron_steam_engine'})
    event.remove({type: 'create:mechanical_crafting', output: 'steampowered:bronze_steam_engine'})
})

