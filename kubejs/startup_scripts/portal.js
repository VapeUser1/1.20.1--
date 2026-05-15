// 加载Custom Portal API Reforged的Java类以及ResourceLocation
const $CustomPortalBuilder = Java.loadClass("net.kyrptonaught.customportalapi.api.CustomPortalBuilder");
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
 
StartupEvents.postInit(event => {
    $CustomPortalBuilder.beginPortal()
        // 框架方块为哭泣的黑曜石
        ["frameBlock(net.minecraft.world.level.block.Block)"](Blocks.CRYING_OBSIDIAN)
        // 设置目的地
        .destDimID($BuiltinDimensionTypes.NETHER_EFFECTS)
        // 设置传送门颜色RGB
        .tintColor(97, 208, 160)
        // 激活物品
        .lightWithItem('minecraft:amethyst_shard')
        // 注册传送门
        .registerPortal();
});