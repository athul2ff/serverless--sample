'use strict';

const { insertData } = require("./serverless/database/connection");

module.exports.hello = async (event) => {
    try {
        console.log(event.body);
        let data = event.body

        const status = await insertData(JSON.parse(data))
        // const response= await insData();
        console.log(status);

        return {

            statusCode: 200,
            body: JSON.stringify(
                {
                    message: 'helloWorld',
                    input: event,

                },
                null,
                2
            ),
        };
    } catch (error) {
        return {

            statusCode: 500,
            body: JSON.stringify(
                {
                    message: 'err',
                    input: err,

                },
                null,
                2
            ),
        };
        console.log(error);
    }

} 
