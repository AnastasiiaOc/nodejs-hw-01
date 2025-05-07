import path from 'node:path';
import { fileURLToPath } from 'node:url';

// export const PATH_DB = path.resolve("db", "db.json") // doesn't work 'D:\GitHub\nodejs-hw-01\db\db.json'
// У файлі src/constants/contacts.js є оголошена константа PATH_DB. Ініціалізуйте її значенням, яке буде зберігати шлях до файлу src/db/db.json.

// common JS:

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
export const PATH_DB = path.join(dirname, '../db/db.json');