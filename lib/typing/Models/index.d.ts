import * as Sequelize from 'sequelize';
import { ConfigInstance, ConfigAttributes } from '../../models/Config';

export type ConfigStatic = typeof Sequelize.Model & Sequelize.Model<ConfigInstance, ConfigAttributes> & IAssociate;


interface IAssociate {
    associate?: any
}