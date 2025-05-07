import { PATH_DB } from '../constants/contacts.js';
 import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try{
 
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8')
    }
    catch (error){
    console.log(error.message)
    }

};

// У файлі src/utils/writeContacts.js опишіть утилітну функцію writeContacts. Вона має записувати дані у файл src/db/db.json. Функція повинна коректно приймати дані як параметр та забезпечувати правильний запис даних у файл.
