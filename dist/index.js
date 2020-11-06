"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseFactory = exports.RegularDatabase = exports.ConfigDatabase = exports.Database = exports.createRegularDatabaseObject = exports.createConfigDatabaseObject = exports.createRegularDatabase = exports.createConfigDatabase = exports.createDatabase = void 0;
const ConfigDatabase_1 = require("./ConfigDatabase");
Object.defineProperty(exports, "ConfigDatabase", { enumerable: true, get: function () { return ConfigDatabase_1.ConfigDatabase; } });
const RegularDatabase_1 = require("./RegularDatabase");
Object.defineProperty(exports, "RegularDatabase", { enumerable: true, get: function () { return RegularDatabase_1.RegularDatabase; } });
const Database_1 = require("./Database");
Object.defineProperty(exports, "Database", { enumerable: true, get: function () { return Database_1.Database; } });
const DatabaseFactory_1 = require("./DatabaseFactory");
Object.defineProperty(exports, "DatabaseFactory", { enumerable: true, get: function () { return DatabaseFactory_1.DatabaseFactory; } });
function createDatabase(databaseType, databasePath) {
    return DatabaseFactory_1.DatabaseFactory.createDatabase(databaseType, databasePath);
}
exports.createDatabase = createDatabase;
function createConfigDatabase(databasePath) {
    return DatabaseFactory_1.DatabaseFactory.createDatabase(ConfigDatabase_1.ConfigDatabase, databasePath);
}
exports.createConfigDatabase = createConfigDatabase;
function createRegularDatabase(databasePath, dbInterface) {
    return DatabaseFactory_1.DatabaseFactory.createDatabase(RegularDatabase_1.RegularDatabase, databasePath, dbInterface);
}
exports.createRegularDatabase = createRegularDatabase;
function createConfigDatabaseObject(databasePath) {
    const database = createConfigDatabase(databasePath);
    return database.db;
}
exports.createConfigDatabaseObject = createConfigDatabaseObject;
function createRegularDatabaseObject(databasePath) {
    const database = createConfigDatabase(databasePath);
    return database.db;
}
exports.createRegularDatabaseObject = createRegularDatabaseObject;
