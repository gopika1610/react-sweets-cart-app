
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
  
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
  },
    items: [
      {
        productId: {
          type: String, 
          required: true,
        },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        imageUrl: { type: String, default: '' },
        quantity: { type: Number, default: 1, required: true },
      }
    ]
  },
  {
    timestamps: true,
  }
);


const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);
export default Cart;