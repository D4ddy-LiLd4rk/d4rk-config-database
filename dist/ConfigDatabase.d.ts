import { Database } from "./Database";
import { DbConfigInterface } from "./typing/DbInterface/DbConfigInterface";
export declare class ConfigDatabase extends Database {
    private _db;
    constructor(path: string);
    get db(): DbConfigInterface;
}
