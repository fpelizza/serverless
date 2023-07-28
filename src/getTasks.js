const AWS = require("aws-sdk");

const getTasks = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient()

    const results = await dynamodb.scan({
        TableName: 'TaskTable'
    }).promise()

    const tasks = results.Items

    return {
        status: 200,
        body: tasks
    }

}

module.exports = {
    getTasks
}