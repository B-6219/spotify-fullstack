import mongoose from "mongoose";

const connectDB = async () => {
        mongoose.connection("connected",()=>{
                console.log('connection established');
                
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)
}

export default connectDB