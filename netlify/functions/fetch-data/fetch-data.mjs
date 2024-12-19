const { MongoClient } = require('mongodb');

// MongoDB connection URI and client setup
const uri = "mongodb+srv://suryapa9092:<password>@test0.7df1d.mongodb.net/?retryWrites=true&w=majority&appName=Test0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        // Test the connection
        await client.connect();
        console.log("Connected to MongoDB!");

        // Access the database
        const db = client.db("test_database"); // Replace with your database name

        // Access the collection
        const collection = db.collection("test_collection"); // Replace with your collection name

        // Query only the 'name' field for all documents
        const results = await collection.find({}, { projection: { name: 1 } }).toArray();

        // Print the 'name' field of each document
        results.forEach(document => {
            console.log(document.name);
        });
    } catch (e) {
        console.error("An error occurred:", e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
