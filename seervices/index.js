exports.generateCrudMethods=Model=>{
    return{
        getAll:() => Model.find(),
        getById:id => Model.find(id),
        create:record => Model.create(record),
        update:(id,record)=>Model.findByIdAndUpdate(id,record,{new:true}),
        delete:(id,record)=>Model.findByIdAndDelete(id)
    }
}