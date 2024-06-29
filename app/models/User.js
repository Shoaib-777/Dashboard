import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
    },
    phone: {
        type: String, unique: true,
    },
    email: {
        type: String, unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    },
    status: {
        type: String,
    },
}, { timestamps: true });

const Users = mongoose.models.Users || mongoose.model('Users', UserSchema)

export default Users