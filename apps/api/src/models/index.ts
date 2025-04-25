import { Sequelize, Dialect } from 'sequelize';
import * as config from '../config/config.json';
import { Post, initPostModel } from './post-model';

interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

const dbConfig = (config as any) as DBConfig;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

initPostModel(sequelize);

export { sequelize, Post };
