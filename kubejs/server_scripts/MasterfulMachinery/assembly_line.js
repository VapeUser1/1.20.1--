MMEvents.createStructures(event => {
    event.create('assembly_line').controllerId('mm:assembly_line').name('Assembly Line')
        .layout(a => {
            a.layer([
                '           ',
                'QSSSSSSSSSQ',
                '           '
            ]).layer([
                'BSSSSSSSSSB',
                'BBBBBBBBBBB',
                'CPPPPPPPPPB'
            ]).layer([
                'BGGGGGGGGGB',
                'BAAAAAAAAAB',
                'BGGGGGGGGGB'
            ]).layer([
                'BBBBBBBBBBB',
                'BBBBBBBBBBB',
                'BBBBBBBBBBB'
            ]).key('A', {
                block: 'immersiveengineering:heavy_engineering'
            }).key('B', {
                block: 'immersiveengineering:sheetmetal_steel'
            }).key('G', {
                block: 'thermal:obsidian_glass'
            }).key('S', {
                block: 'immersiveengineering:steel_scaffolding_standard'
            }).key('P', {
                tag: 'mm:assembly_line_port'
            }).key('Q', {
                port: 'assembly_line_energy', input: true
            })
        })
})