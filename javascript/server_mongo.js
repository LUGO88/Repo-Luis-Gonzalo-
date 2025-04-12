const express = require('express');
const cors = require('cors');
const app=express();
const port=3000;

app.use(cors());//para las peticiones del frontend
app.use
app.use(express.json());//para que el servidor pueda recibir json

//traemos la cadena de cnexion de mongodb
const {MongoClient, ServerApiVersion} = require('mongodb');

const uri='mongodb+srv://gonzamont:Gonzalo123@cluster0.nuvwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(){
    try{
        await client.connect();
        await client.db('admin').command({ping:1});
        console.log('Conexion exitosa');
    }finally{
        await client.close();
    }
}

app.get('/',async(req,res)=>{
    await client.connect();
    const db=client.db("sample_mflix");
    const collection=db.collection("movies");
    const resultado = await collection.find({poster:{$ne:null}},
        {_id:0,title:1,poster:1,plot:1}).toArray();
    res.json(resultado);
});

//npm install cors
app.listen(port,async()=>{
    console.log(`Server atteding at ${port}`);
    await run();
    
});

