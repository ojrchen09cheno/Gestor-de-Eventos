import dotenv from "dotenv"

dotenv.config({path: '../../.env'});

export const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 8000,
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: Number(process.env.DB_PORT) || 5432,
    TOKEN_EXPIRE: process.env.TOKEN_EXPIRE || '48h',
    SECRET: process.env.SECRET,
}