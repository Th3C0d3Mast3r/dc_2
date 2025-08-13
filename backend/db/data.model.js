import mongoose from "mongoose";

const someDataSchema=new mongoose({
    name:{
        type:String,
        required:true,
        trim:true
    },
    collegeName:{
        type:String,
        required:true,
        trim:true
    },
    uid:{
        type:Number,
        required: true,
    },
    
}, {timestamsp:true});

export const SomeData=mongoose.model("SomeData", someDataSchema);
