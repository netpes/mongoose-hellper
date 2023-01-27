const express = require("express");
const app = express();
const mon = require("./index")
const {populated} = require("mongoose");
// mongo connection

mon.ConnectToDb("mongodb+srv://netpes:netpes@cluster0.cnxmrap.mongodb.net/?retryWrites=true&w=majority")

// const schem = mon.CreateSchema("hail", {name:{type: String, required:true}})
//     (firstSchemaName,firstSchemaFields,firstSchema_Ref_Field,SecondSchemaName,SecondSchemaFields, secondSchema_Ref_Field)=>{

    async function that(){
    const tt = await mon.
    PopulateSingle("one", {name: {type:String},
        password: {type:String}},['name'],"two",
        {books: {type:String, required: true},
        auther :{required:false}}, ['auther'])
    console.log(tt);
        const model1 =await  tt.model1
        const model2 =await tt.model2
        // let that;
        // console.log(model1.toString())
        // that = await mon.PopulatePrint("auther", model2, {books: "h1"});
//not working
        console.log(that)
        // const enter1 = mon.GodlessVerify(model1, {name:"hey1",password:"dfasdf"})
        // const enter2 =await  mon.GodlessVerify(model2, {books:"h1",auther:'63d284def25e08f469836e1d'})
        const printme =await mon.PopulateInsertWithOutId(model1, {name:"hey1"}, model2, {books:"test", auther: null}, "auther")
        console.log(printme)
}



that()
app.listen(2000, () => {
    console.log(` running at http://localhost:${2000}/`);
});
