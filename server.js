import http from 'http';
import express from 'express';
// import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import dataBase from './app/models/index.js';
import contactsRoutes from './app/routes/contacts.routes.js';
import messageRoutes from './app/routes/message.routes.js';

let corsOptions = {
  origin: '*',
};

const app = express();

app.use(cors(corsOptions));
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dataBase.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('Drop and re-sync db.');
  })
  .catch((error) => {
    console.log(error);
  });

app.get('/', (req, res) => {
  //   res.json({ info: 'Node.js, Express, and Postgres API' });
  res.send('<h1>Front Page</h1>');
});

app.use(contactsRoutes);
app.use(messageRoutes);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});
