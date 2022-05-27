import DBConfig from '../config/db.config.js';
import Sequelize from 'sequelize';
import ContactsModel from './contacts.model.js';
import MessageModel from './message.model.js';

const sequelize = new Sequelize(DBConfig.DB, DBConfig.USER, DBConfig.PASSWORD, {
  host: DBConfig.HOST,
  dialect: DBConfig.dialect,
  port: DBConfig.PORT,
  pool: {
    max: DBConfig.pool.max,
    min: DBConfig.pool.min,
    acquire: DBConfig.pool.acquire,
    idle: DBConfig.pool.idle,
  },
});

const dataBase = {};
dataBase.Sequelize = Sequelize;
dataBase.sequelize = sequelize;
dataBase.contacts = ContactsModel(sequelize, Sequelize);
dataBase.messages = MessageModel(sequelize, Sequelize);

export default dataBase;
