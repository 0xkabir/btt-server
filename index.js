const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ipnjwkc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.get('/', (request, response) => {
    response.send("btt-server online")
})

async function run() {
    try {
        const database = client.db('bookTheTour')
        const toursCollection = database.collection('tours')
    }

    finally{

    }
}

run().catch((error) => console.error(error));

app.listen(port, () => {
    console.log(`btoooo-sever online at port ${port}`)
})


// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.
// Counting objects: 100% (5/5), done.


console.log("shamima is tying to collaborate with the team");
console.log("shamima is tying to collaborate with the team");
console.log("shamima is tying to collaborate with the team");