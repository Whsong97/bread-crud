import mongoose, { Schema, Document } from 'mongoose';
import Bread, { BreadDocument } from './bread';

enum BakerName {
  Rachel = 'Rachel',
  Monica = 'Monica',
  Joey = 'Joey',
  Chandler = 'Chandler',
  Ross = 'Ross',
  Phoebe = 'Phoebe',
}

interface Baker {
  name: BakerName;
  startDate: Date;
  bio?: string;
}

interface BakerDocument extends Baker, Document {
  breads: BreadDocument[];
}

const bakerSchema: Schema<BakerDocument> = new Schema<BakerDocument>(
  {
    name: {
      type: String,
      required: true,
      enum: [
        BakerName.Rachel,
        BakerName.Monica,
        BakerName.Joey,
        BakerName.Chandler,
        BakerName.Ross,
        BakerName.Phoebe,
      ],
    },
    startDate: {
      type: Date,
      required: true,
    },
    bio: String,
  },
  { toJSON: { virtuals: true } }
);

bakerSchema.virtual('breads', {
  ref: 'Bread',
  localField: '_id',
  foreignField: 'baker',
});

bakerSchema.post('findOneAndDelete', async function () {
  await Bread.deleteMany({ baker: this._conditions._id });
});

export default mongoose.model<BakerDocument>('Baker', bakerSchema);
