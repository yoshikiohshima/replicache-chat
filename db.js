import pgInit from 'pg-promise';
import {connectionString} from "./connection-string";

const pgp = pgInit();
export const db = pgp(connectionString);
