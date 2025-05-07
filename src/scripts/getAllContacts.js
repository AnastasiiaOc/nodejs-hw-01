import {readContacts} from "../utils/readContacts.js";
export const getAllContacts = async () => {
const allContacts = await readContacts()
return allContacts;
};

console.log(await getAllContacts());




// Перевірити роботу функції можна виконавши команду npm run get-all, яка буде виконувати код у файлі src/scripts/getAllContacts.js.