import { Database } from "./Database";
import { createModels } from "./models";
import { DbInterface } from "./typing/DbInterface/DbInterface";
import { DbRegularInterface } from "./typing/DbInterface/DbRegularInterface";

export class RegularDatabase extends Database {
    private _db: DbRegularInterface;

    constructor(path: string, db: DbInterface) {
        super(path);        

        this._db = createModels(db, path);
        this._db.sequelize.authenticate()
            .then(() => {
                console.log('Regular: Connection has been established successfully.');
                this._db.sequelize.sync();
            }).catch(error => {
                console.error('Unable to connect to the database:', error);
            });
    }

    get db() {
        return this._db;
    }

}