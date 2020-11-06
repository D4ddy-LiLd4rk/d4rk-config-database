import { Database } from "./Database";
import { DbInterface } from "./typing/DbInterface/DbInterface";
import { DbRegularInterface } from "./typing/DbInterface/DbRegularInterface";
export declare class RegularDatabase extends Database {
    private _db;
    constructor(path: string, db: DbInterface);
    get db(): DbRegularInterface;
}
