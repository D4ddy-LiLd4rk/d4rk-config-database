import { Database } from "./Database";
import { createConfig } from "./models";
import { DbConfigInterface } from "./typing/DbInterface/DbConfigInterface";

const sqlite = require('sqlite3');

export class ConfigDatabase extends Database {
    private _db: DbConfigInterface;

    constructor(path: string) {
        super(path);

        this._db = createConfig(path);
        this._db.sequelize.authenticate()
            .then(() => {
                console.log('Config: Connection has been established successfully.');
                this._db.sequelize.sync();
            }).catch(error => {
                console.error('Unable to connect to the database:', error);
            });
    }

    get db() {
        return this._db;
    }

}