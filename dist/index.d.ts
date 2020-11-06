/// <reference types="node" />
import { ConfigDatabase } from "./ConfigDatabase";
import { RegularDatabase } from "./RegularDatabase";
import { Database } from "./Database";
import { DatabaseFactory } from "./DatabaseFactory";
import { DatabaseConstructor } from "./DatabaseConstructor";
import { DbConfigInterface } from "./typing/DbInterface/DbConfigInterface";
import { DbRegularInterface } from "./typing/DbInterface/DbRegularInterface";
import { DbInterface } from "./typing/DbInterface/DbInterface";
export declare function createDatabase(databaseType: DatabaseConstructor, databasePath: string): Database;
export declare function createConfigDatabase(databasePath: string): Database;
export declare function createRegularDatabase(databasePath: string, dbInterface: DbInterface): Database;
export declare function createConfigDatabaseObject(databasePath: string): DbConfigInterface;
export declare function createRegularDatabaseObject(databasePath: string): DbRegularInterface;
export { Database };
export { ConfigDatabase };
export { RegularDatabase };
export { DatabaseFactory };
