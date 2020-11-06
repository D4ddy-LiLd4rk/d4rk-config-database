import { Sequelize, DataTypes, Model } from 'sequelize';
import { ConfigStatic } from '../typing/Models';
import { SequelizeAttributes } from '../typing/SequelizeAttributes';

export interface ConfigAttributes {
  id?: number;
  key: string;
  value: string;

  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export interface ConfigInstance extends Model, ConfigAttributes {
  
}

export const ConfigFactory = (sequelize: Sequelize): ConfigStatic => {
  const attributes: SequelizeAttributes<ConfigAttributes> = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };

  const Config: ConfigStatic = <ConfigStatic>sequelize.define('Config', attributes, { tableName: 'token' });
  
  

  return Config;
}