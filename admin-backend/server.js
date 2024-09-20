const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./models/adminRoutes');
app.use('/admin', adminRoutes);
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error(err));

app.use('/admin', adminRoutes); // Make sure this line is present

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
