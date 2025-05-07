import { writeContacts } from "../utils/writeContacts.js";
export const removeAllContacts = async () => {

    const remove = await writeContacts([])
    return remove;
};

removeAllContacts();


// Перевірити роботу функції можна виконавши команду npm run remove-all, яка буде виконувати код у файлі src/scripts/removeAllContacts.js.
