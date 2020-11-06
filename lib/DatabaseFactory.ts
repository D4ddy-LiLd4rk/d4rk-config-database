import { DatabaseConstructor } from "./DatabaseConstructor";
import { DbInterface } from "./typing/DbInterface/DbInterface";

export class DatabaseFactory {
    static createDatabase(db: DatabaseConstructor, path: string, dbI?: DbInterface) {
        return new db(path, dbI);
    }
}