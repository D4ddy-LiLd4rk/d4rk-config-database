"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseFactory = void 0;
class DatabaseFactory {
    static createDatabase(db, path, dbI) {
        return new db(path, dbI);
    }
}
exports.DatabaseFactory = DatabaseFactory;
