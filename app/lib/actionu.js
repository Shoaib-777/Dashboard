"use server"

import ConnectDB from "../db/ConnectDB"
import Users from "../models/User";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from  'bcrypt'
import { signIn } from "../auth";

export const FetchUser = async (q) => {
    const regex = new RegExp(q, "i")
    try {
        await ConnectDB();
        const FUdata = await Users.find({ username: { $regex: regex } });
        return FUdata
    } catch (err) {
        console.log("failed to fetch user data", err)
        throw new Error("Failed to Connect and fetch user data")
    }
}
export const AddUserf = async (formData) => {
    const { username, phone, email, password, role, status } = Object.fromEntries(formData);
    try {
        await ConnectDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new Users({
            username, phone, email, password : hashedPassword, role, status
        })
        await newUser.save()
    } catch (err) {
        console.log('failed to create user', err)
        throw new Error("failed to create user")
    }
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}
export const DeleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)
    try {
        await ConnectDB()
        await Users.findByIdAndDelete(id)
    } catch (err) {
        console.log("error to fecth user", err)
    }
    revalidatePath('/dashboard/users')
}
export const FetchUserId = async (id) => {
    try {
        await ConnectDB()
        const Fdataid = await Users.findById(id)
        return Fdataid
    } catch (err) {
        console.log("error to fecth user", err)
    }
}
export const Updateuserf = async (formData) => {
    const { id, username, phone, email, password, role, status } = Object.fromEntries(formData)
    try {
        await ConnectDB();
        const Updatefields = {
            username, phone, email, password, role, status
        }
        Object.keys(Updatefields).forEach(
            (key) => (Updatefields[key] === "" || undefined) && delete Updatefields[key]);
        await Users.findByIdAndUpdate(id, Updatefields)
    } catch (error) {
        console.log(error)
        throw new Error("failed to update user")
    }
    revalidatePath('/dashboard/users')
    redirect('/dashboard/users')
}

// next auth 
export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "Wrong Credentials !";
      }
      throw err;
    }
  };