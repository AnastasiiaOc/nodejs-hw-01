import readContacts from "../utils/readContacts.js";
import createFakeContact from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {

    const contacts = await readContacts();
    const newContact = createFakeContact()
    contacts.push(newContact)
    await writeContacts(contacts)

};

addOneContact();



// У файлі src/scripts/addOneContact.js опишіть функцію addOneContact. Вона має додавати до масиву у файлі src/db/db.json лише один згенерований контакт. Забезпечте правильне додавання одного контакту до масиву, збереження змін у файлі.
// Перевірити роботу функції можна виконавши команду npm run add-one, яка буде виконувати код у файлі src/scripts/addOneContact.js. У файлі src/db/db.json мають відбутися відповідні зміни.