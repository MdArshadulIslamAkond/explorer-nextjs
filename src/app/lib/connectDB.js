import { MongoClient, ServerApiVersion } from "mongodb";
 
let db;
const connectDB = async()=>{
    if(db) return db;
    
    try{
            

        const uri = process.env.MONGODB_URI;
        console.log(uri);
        if(!uri){
          console.log("No MongoDB URI found in environment variables");
          // process.exit(1);
        }

        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        let client = new MongoClient(uri, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
        });
        db = client.db('next_hero');
        // console.log("Connected to MongoDB successfully.");
        return db;

    }catch(error){
        console.log("Error is waker connecting to MongoDB");
    }
} 
export default connectDB;

 // let clientPromise;

        // if (process.env.NODE_ENV === 'development') {
        //     if (!global._mongoClientPromise) {
        //       global._mongoClientPromise = client.connect()
        //     }
        //     clientPromise = global._mongoClientPromise
        //   } else {
        //     clientPromise = client.connect()
        //   }

        // const connectClient = await clientPromise;
        // const connectClient = await clientPromise;