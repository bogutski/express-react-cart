import mongoose from 'mongoose';

const vocabularSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  terms: { type: Object, required: false },
});

export default mongoose.model('Vocabular', vocabularSchema);
