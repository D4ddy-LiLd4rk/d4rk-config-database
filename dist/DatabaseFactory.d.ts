import { DatabaseConstructor } from "./DatabaseConstructor";
import { DbInterface } from "./typing/DbInterface/DbInterface";
export declare class DatabaseFactory {
    static createDatabase(db: DatabaseConstructor, path: string, dbI?: DbInterface): any;
}
