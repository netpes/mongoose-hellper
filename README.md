
# Mongoose Hellper

    This is a module for mongoose library.
    This module communicate with mongo DB using mongoose!
    Every function in this Module is asynchronies, please use async-await/.then()

    



## Documentation

Insert data to DB:

    1.	Insert securely with: InsertVerify() function.
        receive parameters for:
         (the schema, {data_schema_Key:data}, {identifier key: identifier})

        2. Insert without roles: GodlessVerify(the schema, {data_schema_Key:data}).

        3. Insert into an object: use NewNestObj() function, receive parameters for:
             (The schema, {data_schema_Key:data}, the object key, the data)

        4. Insert into array: use the NewNestArr() function, receive the parameters: 
            (The schema, {data_schema_Key:data}, the array key, the data).

Print data from DB:

    1. Print every object inside the document: use the PrintAll() function, receive the parameters: 
        (The schema).

    2. Print Single Object inside the document: use the PrintSingle() function, 
        Receive the parameters (the schema,{data_schema_Key:data}).

    3. Print nested Object/Array: use the PrintNested() function, recive the parameters:
        (The schema,{data_schema_Key:data}, nest key).
    

Delete data from document: 

    1. Delete an object from document: use the DeleteObj() function, revice the parameters: 
        (The schema, {data_schema_Key:data} ).

    2. Delete row value: use the DeleteRow() function, recive the parameters:
        (The schema, {data_schema_Key:data}, nest parameter).

Update data:

    1. Update an entire object: use the UpdateObject() function ,receive the parameters:
        (The schema, {data_schema_Key:data},{new values object})

    2. Update a single row: use the UpdateRow() function, receive the parameters:
        (The schema, {data_schema_Key:data},{new values object}).


Compare: 

    1. Compare data to DB: use the Compare() function ,receive the parameters:
        (The schema, {data_schema_Key:data}, the row you want to compare ,the value you comparing to).





## Usage/Examples

Controller File:


    const someSchema = require("mongooseSchemaPath");
    const mongoose_hellper = require("mongoose_hellper")


    module.export = {

      CreateUser: async (req,res) =>{
        const {name} = req.body;
        const response = await mongoose_hellper.GodlessVerify(userSchem, {name})
      }
    }   





## Authors

- [@netpes](https://github.com/netpes) 

 -- VIVA LA FREE CODE -- 


