MMEvents.createStructures(event => {
    event.create('lead_chamber').controllerId('mm:lead_chamber').name('Lead Chamber')
        .layout(a => {
            a.layer([
                'BBB',
                'BIB',
                'BBB'
            ]).layer([
                'BLB',
                'L L',
                'BLB'
            ]).layer([
                'AAA',
                'AOA',
                'ACA'
            ]).key('A', {
                block: 'immersiveengineering:cokebrick'
            }).key('B', {
                block: 'immersiveengineering:sheetmetal_lead'
            }).key('I', {
                port: 'lead_chamber_item', input:true
            }).key('O', {
                port: 'lead_chamber_item', input:false
            }).key('L', {
                port: 'lead_chamber_fluid'
            })
        })
})
