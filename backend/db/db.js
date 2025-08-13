import mongoose from 'mongoose'

const connectDB= async ()=>{
    const DB_URI= "mongodb+srv://menildhameliya1234:C2pA4FhV5ZLCtopZ@cluster0.mg2kqsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    try{
        const connection= await mongoose.connect(DB_URI)
    }
    catch(err)
    {
        console.log(err);
    }
}

export default connectDB;