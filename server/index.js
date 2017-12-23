import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './src/routes/routes';

const app = express();
app.disable('x-powered-by');

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


// logger
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

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

app.use('/', router);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(5000, () => {
  console.log('Example app listening on port 5000');
});
