
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    imageUrl: { type: String, default: '' },
    category: { type: String, default: '' },
    countInStock: { type: Number, default: 0 },
    isExplore: { type: Boolean, default: false } 
  },
  {
    timestamps: true,
  }
);


const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;