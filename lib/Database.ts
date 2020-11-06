const sqlite = require('sqlite3');

export class Database {
    private _sqliteDB;

    constructor(path: string) {
        this._sqliteDB = new sqlite.Database(path,
            (err) => {
                if (err)
                    console.error('Unable to create/open to the database:', err);
            });
    }

    get sqliteDB() {
        return this._sqliteDB;
    }

}