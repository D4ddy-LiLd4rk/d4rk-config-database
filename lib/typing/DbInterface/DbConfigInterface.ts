import { ConfigStatic } from "../Models";
import { DbInterface } from "./DbInterface";

export interface DbConfigInterface extends DbInterface {
  Config: ConfigStatic;
}