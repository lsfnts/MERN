import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import productRoutes from './routes/product';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/products', productRoutes);

const CONECTION_URL = `mongodb+srv://${process.env.LOGIN}:${process.env.MDBPASS}@cluster0.umc89.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = parseInt(process.env.PORT || '8000', 10);
mongoose
  .connect(CONECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.info(`Server running on port ${PORT}`))
  )
  .catch((error) => console.error(error.message));
