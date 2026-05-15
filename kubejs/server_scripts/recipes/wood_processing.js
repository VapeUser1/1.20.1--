//这是js不是python，注意语法
ServerEvents.recipes(event => {
    var itemlst = []
    var regex = /_planks$/;//匹配以_planks结尾的字符串
    var regex2 = /minecraft:.*/;//匹配以minecraft:开头的字符串
    Ingredient.all.getItemIds().forEach(item => {
        itemlst.push(item)
    })
    for (let i of itemlst) {
        if (regex.test(i)==true && regex2.test(i)==false && i!='northstar:calorian_planks') {//原版的就不用改了，mod的才改
            let wood_name = i.replace('_planks', '')
            let log = wood_name+'_log'
            let modid = i.split(':')[0] //获取modid
            let stripped_log = modid + ':stripped_' + wood_name.replace(modid + ':', '') + '_log' //定义剥皮后的原木名称变量
            if(modid=='forestry'){
                stripped_log = wood_name+'_stripped_log'
            } //如果是forestry的木头，剥皮后的原木名称和其他mod不一样，单独处理一下
            
            if (itemlst.includes(log)) {
                event.remove({type:'minecraft:crafting_shapeless',output:`${i}`})//remove the original recipe
                event.recipes.ytech.remaining_shapeless_crafting(i, [log,'#minecraft:axes'])
                event.recipes.ytech.remaining_shapeless_crafting('3x ' + i, [log,'#forge:saws'])
                event.recipes.ytech.chopping('2x ' + i, log, '#minecraft:axes')
                
                event.custom({"type":"immersiveengineering:sawmill",
                    "energy":1600,
                    "input":{"item":log},
                    "result":{"count":6,"item":i},
                    "secondaries":[{"output":{"tag":"forge:dusts/wood"},"stripping":true},{"output":{"tag":"forge:dusts/wood"},"stripping":false}],
                    "stripped":{"item":stripped_log}
                })
                
                //copilot,除了js基础内容，你先别提示了，幻觉有点多
            }
        }
    }
    //calorian_planks的配方比较特殊，单独处理一下
    event.remove({type:'minecraft:crafting_shapeless',output:'northstar:calorian_planks'})
    event.recipes.ytech.remaining_shapeless_crafting('northstar:calorian_planks', ['northstar:calorian_log','#minecraft:axes'])
    event.recipes.ytech.remaining_shapeless_crafting('3x northstar:calorian_planks', ['northstar:calorian_log','#forge:saws'])
    event.recipes.ytech.chopping('2x northstar:calorian_planks', 'northstar:calorian_log', '#minecraft:axes')
    //小天才作者没给calorian_log添加stripped的属性，所以这个木头只能用斧头砍了，没法锯了
    //copilot还挺通人性
})
