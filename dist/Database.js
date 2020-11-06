"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const sqlite = require('sqlite3');
class Database {
    constructor(path) {
        this._sqliteDB = new sqlite.Database(path, (err) => {
            if (err)
                console.error('Unable to create/open to the database:', err);
        });
    }
    get sqliteDB() {
        return this._sqliteDB;
    }
}
exports.Database = Database;
