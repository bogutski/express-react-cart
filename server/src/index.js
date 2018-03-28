import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './modules/user/userRoutes';
import productRouter from './modules/product/productRoutes';
import vocabularRouter from './modules/vocabular/vocabularRoutes';
import backupRouter from './modules/backup/backupRoutes';
import fileRouter from './modules/file/fileRoutes';

import message from './modules/messages/messages';

const app = express();

// ===== DISABLE EXPRESS SIGNATURE ======
app.disable('x-powered-by');

// ===== DATABASE ======
mongoose.Promise = global.Promise; // fix deprecated problem in mongoose
mongoose.connect(
  `mongodb://siteograf:${
    process.env.MONGO_ATLAS_PWD
  }@reactshop-shard-00-00-wjryo.mongodb.net:27017,
  reactshop-shard-00-01-wjryo.mongodb.net:27017,
  reactshop-shard-00-02-wjryo.mongodb.net:27017/test?ssl=true&replicaSet=ReactShop-shard-0&authSource=admin`,
  {
    useMongoClient: true,
  },
);
mongoose.connection.on('error', () => {
  throw new Error('Unable to connect to database');
});

// ===== LOGGER =====
app.use(morgan('dev'));

// ===== PARSE RESPONSE =====
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

// ===== CORS =====
app.use((req, res, next) => { // eslint-disable-line consistent-return
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// ===== ROUTING =====
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/vocabular', vocabularRouter);
app.use('/file', fileRouter);
app.use('/backup', backupRouter);

// ===== ERROR HANDLING =====
app.use((req, res, next) => res.status(404).json(message.error('API not found'))); // eslint-disable-line no-unused-vars

app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(error.status || 500);
  res.json(message.error(error.message));
});

// ===== PORT =====
app.listen(5000, () => {
  console.log('Example app listening on port 5000');
});
