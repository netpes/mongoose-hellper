

module.exports = {
    InsertVerify:(schema,dataobject,identifier)=>{
        if(schema && dataobject && identifier) {
            try {
                return schema.findOne(identifier).then((existData) => {
                
                    if (existData) {
                        return "error, already exist"
                    } else {
                        const newData = new schema(dataobject)
                        return newData.save().then((res)=>{
                            if (res){
                                return "saved"
                            }
                        })
                    }
                })
            } catch(err){
                return err
            }
        } else {
            return "data missing"
        }
    },
    GodlessVerify:  (schema,data)=> {
            try {
                const newData = new schema(data)
                return newData.save().then((res)=>{
                    if (res){
                        return "saved"
                    }
                })
            } catch (err) {
                return err
            }
    },
    PrintAll:(schema)=>{
        try {
            return schema.find().then((existData) => {
                if (existData.length > 0) {
                    return existData
                } else {
                    return "no data to return"
                }
            })
        } catch (err){
            return err
        }
    },
    PrintSingle: (schema,identifier)=>{
        try {
            return schema.findOne(identifier).then((existData) => {
                if (existData) {
                    return existData
                } else {
                    return "no data to return"
                }
            })
        } catch (err){
            return err
        }
    },
    NewNestOBJ: (schema,identifier,nest,nestData)=>{
        try {
            return schema.findOne(identifier).then((existData) => {
        
                if (existData) {
                    existData[nest] = nestData;
                    return existData.save().then((data) => {
                       if (data[nest] === nestData) {
                           return "saved!"
                       } else {
                           return "error at the last step! check if the schema input type match the function type"
                       }
                    })
                } else {
                    return "no data to return"
                }
            })
        } catch (err) {
            return err
        }
    },
    NewNestArr : (schema,identifier,nest,nestData )=>{
        try {
            return schema.findOne(identifier).then((existData) => {
                if (existData) {
                    existData[nest].push(nestData);
                    return existData.save().then(() => {
                        return "saved!"
                    })
                } else {
                    return "no data to return"
                }
            })
        } catch (err){
            return err
        }
    },
    DeleteObj: (schema,identifier)=> {
        try {
            return schema.deleteOne(identifier).then((res)=>{

                if(res.acknowledged === true){
                    return "deleted"
                } else {
                    return "error!"
                }

            })
        } catch (err){
            return err
        }
    },
    PrintNested: (schema,identifier,nest) =>{
        try {
            return schema.findOne(identifier).then((existData) => {
                if(existData) {
                    if(existData[nest]) {
                        return existData[nest]
                    } else {
                        return "error! cannot find nested data!"
                    }
                }else {
                    return "error! cannot find data!"
                }
            })
        }catch (err){
            return err
        }
    },
    DeleteRow: (schema,identifier, nest)=>{
        try {
            return schema.findOne(identifier).then((existData) => {
                if(existData) {
                    if(existData[nest]) {
                        existData[nest] = null
                        return existData.save().then((res)=>{
                            if (res[nest]===null){
                                return "row rest succeeded"
                            }
                        })
                    } else {
                        return "error! cannot find nested data!"
                    }
                }else {
                    return "error! cannot find data!"
                }
            })
        }catch (err){
            return err
        }
    },
    UpdateObject: (schema, identifier, updatedvalue)=>{
        try {
            return schema.findOneAndUpdate(identifier, updatedvalue).then((existData) => {
                if(existData) {
                    return existData
                }else {
                    return "error! cannot find data!"
                }
            })
        }catch (err){
            return err
        }
    },
    UpdateRow: (schema, identifier, updatedvalue)=>{
        try {
            return schema.findOneAndUpdate(identifier, updatedvalue).then((existData) => {
                if(existData) {
                    return existData
                }else {
                    return "error! cannot find data!"
                }
            })
        }catch (err){
            return err
        }
    },
    Compare: (schema,identifier,nest,valueToCompare) => {
        try {
            return schema.findOne(identifier).then((existData) => {
                if(existData) {
                    if(existData[nest] ===valueToCompare){
                        return true
                    } else {
                        return false
                    }
                }else {
                    return "error! cannot find data!"
                }
            })
        }catch (err){
            return err
        }
    }
}
