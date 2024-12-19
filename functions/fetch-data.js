const { MongoClient } = require('mongodb');

// MongoDB connection URI and client setup
const uri = "mongodb+srv://suryapa9092:<9iMXKRF89jT4vE9G>@test0.7df1d.mongodb.net/?retryWrites=true&w=majority&appName=Test0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async function (event, context) {
    try {
        await client.connect();
        const db = client.db("moto"); // Replace with your database name
        const collection = db.collection("model"); // Replace with your collection name

        // Query only the 'name' field for all documents
        const results = await collection.find({}, { projection: { name: 1 } }).toArray();

        return {
            statusCode: 200,
            body: JSON.stringify(results),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    } finally {
        await client.close();
    }
};
