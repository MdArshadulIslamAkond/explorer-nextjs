
import connectDB from "@/app/lib/connectDB"

export const POST = async(req) =>{
    try {
        const newUser = await req.json();
        console.log(newUser);
        const db = await connectDB();
        const userCollection = db.collection('users');
        // console.log(db);
        const existingUser = await userCollection.findOne({email: newUser.email});
        if(existingUser){
            return Response.json({message: "User already exists"}, {status:409});
        }

        const result = await userCollection.insertOne(newUser);
        
        // return Response.json(result)
        return Response.json({message: "new user created successfully", result}, {status:201});
    }catch(e){
        return Response.json({message: "something went wrong", error: e.message}, {status:500});
    }
}