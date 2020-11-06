import { Sequelize, Model } from 'sequelize';
import { ConfigStatic } from '../typing/Models';
export interface ConfigAttributes {
    id?: number;
    key: string;
    value: string;
    readonly createdAt?: Date;
    readonly updatedAt?: Date;
}
export interface ConfigInstance extends Model, ConfigAttributes {
}
export declare const ConfigFactory: (sequelize: Sequelize) => ConfigStatic;
