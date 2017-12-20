import express from 'express';
import morgan from 'morgan';
import router from './src/routes';

const app = express();
app.disable('x-powered-by');

// logger
app.use(morgan('dev'));

app.use('/', router);

// Catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).json({ status: '404' });
});

app.listen(5000, () => {
  console.log('Example app listening on port 5000');
});
