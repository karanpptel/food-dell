import mongoose from "mongoose";

 export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://kpmorgan:33858627@cluster0.ohof5gk.mongodb.net/food-dell').then(()=>console.log("DB Connected"));
}

//mongodb+srv://kpmorgan:33858627@cluster0.ohof5gk.mongodb.net/food-dell
//mongodb://localhost:27017/food-dell