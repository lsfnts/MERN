import { Schema, model, Date, Types } from 'mongoose';

export interface IProduct {
  name: string;
  price: Types.Decimal128;
  stock: number;
  description: string;
  category: string[];
}

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Schema.Types.Decimal128, required: true },
  stock: { type: Number, default: 0 },
  description: { type: String, required: true },
  category: { type: [String], required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<IProduct>('product', productSchema);
