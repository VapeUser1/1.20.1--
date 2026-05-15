ServerEvents.tags('block', event => {
    event.add('minecraft:needs_diamond_tool', 'minecraft:amethyst_cluster')
    event.add('mm:assembly_line_port', 'mm:assembly_line_item_input')
    event.add('mm:assembly_line_port', 'mm:assembly_line_fluid_input')
})
ServerEvents.tags('item', event => {
    var leather_raw = [
        'butchersdelight:cow_hide',
        'butchersdelight:sheephide',
        'butchersdelight:hoglinskin',
        'butchersdelight:goat_fur',
        'minecraft:rabbit_hide'
    ]
    for (let i of leather_raw){
        event.remove('forge:leather', `${i}`)
        event.remove('forestry:backpack/allow/hunter', `${i}`)
        event.add('ytech:furry_hides', `${i}`)
    }
})
ServerEvents.tags('fluid', event => {
    event.remove('minecraft:water', 'createaddition:seed_oil')
    event.remove('minecraft:water', 'createaddition:flowing_seed_oil')
    event.remove('minecraft:water', 'createaddition:bioethanol')
    event.remove('minecraft:water', 'createaddition:flowing_bioethanol')
    event.remove('minecraft:water', 'planttech2:biomass')
    event.remove('minecraft:water', 'planttech2:biomass_flowing')
})