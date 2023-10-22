const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://flavorsome:kF1ciM9JMkUiODMU@cluster0.degl89b.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    await client.connect();
    const menuCollection = client.db("menudata").collection("food");
    if (req?.method === "GET") {
      const menus = await menuCollection.find({}).toArray();
     
      res.send(menus);
      }
      if (req.method === "GET") {
  
  const id =req.params.id 
     const qurey ={_id:ObjectId(id)}
     const  food= await menuCollection.findOne(qurey)
  if (food) {
    
    res.send(food);
  } 
}

  } finally {
    // Ensure that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
