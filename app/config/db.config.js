const DBConfig = {
  DB: 'chat-application',
  USER: 'postgres',
  PASSWORD: 'postgres',
  HOST: 'localhost',
  dialect: 'postgres',
  PORT: 5432,
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000,
  },
};

export default DBConfig;
