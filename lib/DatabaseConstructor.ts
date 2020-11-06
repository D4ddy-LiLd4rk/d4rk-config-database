import { DbInterface } from "./typing/DbInterface/DbInterface";

export interface DatabaseConstructor {
    new(path: string, db?: DbInterface);
}