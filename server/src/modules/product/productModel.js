import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  catalog: { type: String, required: false },
  price: { type: Number, required: true },
  image: { type: String, required: false },
});

export default mongoose.model('Product', productSchema);
