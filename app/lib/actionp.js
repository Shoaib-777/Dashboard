"use server"

import { revalidatePath } from "next/cache";
import ConnectDB from "../db/ConnectDB"
import Products from "../models/Products";
import { redirect } from "next/navigation";

export const FetchProduct = async(q)=>{
    const regex = new RegExp(q, "i")
    try {
        await ConnectDB();
        const FPdata = await Products.find({ title: { $regex: regex } })
        return FPdata
    } catch (err) {
        console.log("failed to fetch product",err)
        throw new Error("not connected db and failed to fetch product")

    }
}
export const AddProductf = async(formData)=>{
    const {title,description,price,stock} = Object.fromEntries(formData);
    try {
        await ConnectDB();
        const newProducts = new Products({
            title,description,price,stock
        })
        await newProducts.save()
    } catch (err) {
        console.log(err)
        throw new Error("failed to create Product")
    }
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}
export const DeleteProduct = async(formData) =>{
    const {id} = Object.fromEntries(formData)
    try {
        await ConnectDB();
        await Products.findByIdAndDelete(id)
        
    } catch (err) {
        console.log('unable to delete product',err)
        throw new Error("Product not deleted")
    }
    revalidatePath('/dashboard/products')
}
export const FetchProductId = async(id)=>{
    try {
        await ConnectDB()
        const FProductdataid = await Products.findById(id)
        return FProductdataid
    } catch (err) {
     console.log("error to fecth user",err)   
    }
}
export const UpdateProductf = async(formData)=>{
    const{id,title,description,price,stock}= Object.fromEntries(formData)
    try {
        await ConnectDB();
        const Updatefields = {
            title,description,price,stock
        }
        Object.keys(Updatefields).forEach(
            (key)=>(Updatefields[key] === "" || undefined) && delete Updatefields[key]);
        await Products.findByIdAndUpdate(id,Updatefields)
    } catch (error) {
        console.log(error)
        throw new Error("failed to update user")
    }
    revalidatePath('/dashboard/products')
    redirect('/dashboard/products')
}