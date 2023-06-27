import express from 'express';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
import BreadRoutes from './controllers/bread';
import BakerRoutes from './controllers/baker';

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Routes
app.use('/breads', BreadRoutes);
app.use('/bakers', BakerRoutes);

// db connection
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URI || '', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
