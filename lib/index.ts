import { ConfigDatabase } from "./ConfigDatabase";
import { RegularDatabase } from "./RegularDatabase";
import { Database } from "./Database";
import { DatabaseFactory } from "./DatabaseFactory";
import { DatabaseConstructor } from "./DatabaseConstructor";
import { DbConfigInterface } from "./typing/DbInterface/DbConfigInterface";
import { DbRegularInterface } from "./typing/DbInterface/DbRegularInterface";
import { DbInterface } from "./typing/DbInterface/DbInterface";


export function createDatabase(databaseType: DatabaseConstructor, databasePath: string): Database {
    return DatabaseFactory.createDatabase( databaseType, databasePath);
}

export function createConfigDatabase(databasePath: string): Database {
    return DatabaseFactory.createDatabase( ConfigDatabase, databasePath);
}

export function createRegularDatabase(databasePath: string, dbInterface: DbInterface): Database {
    return DatabaseFactory.createDatabase( RegularDatabase, databasePath, dbInterface);
}

export function createConfigDatabaseObject(databasePath: string): DbConfigInterface {
    const database: ConfigDatabase = <ConfigDatabase>createConfigDatabase(databasePath);
    return database.db;
}

export function createRegularDatabaseObject(databasePath: string): DbRegularInterface { 
    const database: RegularDatabase = <RegularDatabase>createConfigDatabase(databasePath);
    return database.db;
}

export { Database }
export { ConfigDatabase }
export { RegularDatabase }
export { DatabaseFactory }