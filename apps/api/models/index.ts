import { Sequelize, Dialect } from "sequelize";
import * as config from '../config/config.json';  // Import the config.json directly

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

const dbConfig: DBConfig = config as DBConfig;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: true,
  }
);

export default sequelize;
