import { Sequelize } from 'sequelize';
import { DbConfigInterface } from '../typing/DbInterface/DbConfigInterface';
import { DbInterface } from '../typing/DbInterface/DbInterface';
import { ConfigFactory } from './Config';

export const createModels = (db: DbInterface, dbPath: string): DbInterface => {
//export const createModels = (sequelizeConfig: any): DbInterface => {
  //const { database, username, password, params } = sequelizeConfig;
  const sequelize = new Sequelize({
    logging: false,
    dialect: 'sqlite',
    storage: dbPath
  });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
};

export const createConfig = (dbPath: string): DbConfigInterface => {
  //export const createModels = (sequelizeConfig: any): DbInterface => {
    //const { database, username, password, params } = sequelizeConfig;
    const sequelize = new Sequelize({
      logging: false,
      dialect: 'sqlite',
      storage: dbPath
    });
  
    const cDB: DbConfigInterface = {
      sequelize,
      Config: ConfigFactory(sequelize),
    };
  
    Object.keys(cDB).forEach(modelName => {
      if (cDB[modelName].associate) {
        cDB[modelName].associate(cDB);
      }
    });
  
    return cDB;
  };