ServerEvents.tags('block', event => {
    event.add('minecraft:needs_diamond_tool', 'minecraft:amethyst_cluster')
    event.add('mm:assembly_line_port', 'mm:assembly_line_item_input')
    event.add('mm:assembly_line_port', 'mm:assembly_line_fluid_input')
})
ServerEvents.tags('item', event => {
    // 优化: 集中 item 标签（原 obsidian.js 中的 amethyst 词条移入此处，减少重复的 ServerEvents.tags('item') 注册）
    event.add('forge:gems/amethyst', 'tconstruct:ichor_slime_crystal')
    const leather_raw = [
        'butchersdelight:cow_hide',
        'butchersdelight:sheephide',
        'butchersdelight:hoglinskin',
        'butchersdelight:goat_fur',
        'minecraft:rabbit_hide'
    ]
    // 优化: 模板字符串在 id 已为字符串时可省略，略减分配
    for (const id of leather_raw) {
        event.remove('forge:leather', id)
        event.remove('forestry:backpack/allow/hunter', id)
        event.add('ytech:furry_hides', id)
    }
})
ServerEvents.tags('fluid', event => {
    // 优化: 用数据驱动循环替代重复的 event.remove 调用，便于维护
    const notWater = [
        'createaddition:seed_oil',
        'createaddition:flowing_seed_oil',
        'createaddition:bioethanol',
        'createaddition:flowing_bioethanol',
        'planttech2:biomass',
        'planttech2:biomass_flowing'
    ]
    for (const id of notWater) event.remove('minecraft:water', id)
})