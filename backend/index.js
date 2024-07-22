import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './Route/book.route.js'; // Adjusted import path
import userRoute from './Route/user.route.js';

import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

// Middleware to parse JSON requests
app.use(express.json());

// Database connection
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});

// Routes


app.use('/book', bookRoute);
app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
