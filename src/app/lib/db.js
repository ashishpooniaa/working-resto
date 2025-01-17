import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
       const {connection} = await  mongoose.connect(process.env.MONGO_DB_URL,{
        dbName:"restoDB"
       })
       console.log("Db connected...")
    //    console.log(connection)
    } catch (error) {
        console.log("failed to connect with database")
        console.log(error);
    }
    
}