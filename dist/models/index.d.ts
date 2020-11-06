import { DbConfigInterface } from '../typing/DbInterface/DbConfigInterface';
import { DbInterface } from '../typing/DbInterface/DbInterface';
export declare const createModels: (db: DbInterface, dbPath: string) => DbInterface;
export declare const createConfig: (dbPath: string) => DbConfigInterface;
