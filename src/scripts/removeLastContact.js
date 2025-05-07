import {readContacts} from "../utils/readContacts.js";
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {

    const contacts = await readContacts();
    if (contacts.length > 0){
        const result = contacts.pop()
        await writeContacts(contacts)
        return result;
    }
return
};

removeLastContact();


// Перевірити роботу функції можна виконавши команду npm run remove-last, яка буде виконувати код у файлі src/scripts/removeLastContact.js. У файлі src/db/db.json мають відбутися відповідні зміни.