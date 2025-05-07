import createFakeContact from "../utils/createFakeContact.js";
import readContacts from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const newContacts = [];
  for (let i = 1; i<= number;  i++){
    const contact = createFakeContact();
    newContacts.push(contact)

  }
    // const newContacts = [...new Array(number)].map(() => createFakeContact()); instead of for
  const updateContacts = [...contacts, ...newContacts];
  await writeContacts(updateContacts);   
      };

generateContacts(5);


// Перевірити роботу функції можна виконавши команду npm run generate,