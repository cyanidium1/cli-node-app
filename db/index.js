const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getById = async (Id) => {
  const contacts = await getAll();
  const result = contacts.find((el) => el.id === Id);
  return result || null;
};

const add = async ({ ...data }) => {
  const contacts = await getAll();
  const newCont = {
    id: Math.random() * 10000000000,
    ...data,
  };
  contacts.push(newCont);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newCont;
};

const deleteContact = async (id) => {
  const contacts = await getAll();
  const contactId = contacts.findIndex((el) => el.id === id);
  if (!contactId || contactId === -1) {
    return null;
  }
  const result = contacts.splice(contactId, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  deleteContact,
};
