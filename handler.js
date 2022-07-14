 'use strict';

const { insertData } = require("./serverless/database/connection");

// const insData=require("./serverless/database/connection")
 
module.exports.hello = async (event) => {
    try {
        const status =await insertData()
        // const response= await insData();
        console.log(status);
        return {
    
            statusCode:200,
            body: JSON.stringify(
                {
                    message:'helloWorld',
                    input: event,
                    
                },
                null,
                2
            ),
        };     
    } catch (error) {
       console.log(error); 
    }
   
} 
