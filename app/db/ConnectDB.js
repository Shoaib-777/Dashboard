import mongoose from "mongoose";

export default async function ConnectDB(){
    try {
    mongoose.connect(process.env.MONGO_URI)
    console.log("connected to db shoaib bhai")
    } catch (err) {
        console.log("failed to connect",err)
    }
}