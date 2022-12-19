import { Mongoose } from "mongoose";

const connectDB = async () => Mongoose.connect("mongodb://localhost:27017/DemoDatabase");

export default connectDB