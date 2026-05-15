ServerEvents.recipes(event => {
    var remove = [
        'ceramicbucket:ceramic_bucket',
        'minecraft:charcoal',
        '#forge:ingots'
    ]
    for (let i of remove){
        event.remove({type:'minecraft:smelting', output:`${i}`})
    }
    event.remove({type: 'minecraft:blasting', output: '#forge:ingots'})
    event.smelting('tconstruct:seared_brick', 'tconstruct:grout')
    event.smelting('ceramicbucket:ceramic_bucket', 'ytech:unfired_clay_bucket');
    event.smelting('minecraft:flower_pot', 'ytech:unfired_flower_pot');
    event.smelting('ytech:amphora', 'ytech:unfired_amphora');
    event.smelting('minecraft:decorated_pot', 'ytech:unfired_decoration_pot');
    event.smelting('minecraft:brick', 'ytech:unfired_brick');
    event.smelting('kubejs:blast_brick', 'kubejs:raw_fire_clay');
    event.smelting(Item.of('ytech:iron_bloom', '{Damage:128}'), 'industrialrenewal:sponge_iron');
    event.blasting(Item.of('ytech:iron_bloom', '{Damage:64}'), 'industrialrenewal:sponge_iron')
})