import { Pool } from 'pg';
import { config } from '../../../config/config'

export const pool = new Pool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  port: config.dbPort,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});