import { Pool } from 'pg/lib';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'newdb',
  port: 5432,
});
