import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export async function addOneContact() {
  const contacts = await readContacts();
  contacts.push(createFakeContact());
  await writeContacts(contacts);
}

addOneContact();
