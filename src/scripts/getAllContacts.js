import { readContacts } from '../utils/readContacts.js';

export async function getAllContacts() {
  const contacts = await readContacts();
  console.log(contacts);
}

console.log(await getAllContacts());
