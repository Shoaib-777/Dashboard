import mongoose from 'mongoose';
const { Schema } = mongoose;

const Productschema = new Schema({
    title: {
        type: String, unique: true,
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    stock: {
        type: String,
    },
}, { timestamps: true });

const Products = mongoose.models.Products || mongoose.model('Products', Productschema)

export default Products