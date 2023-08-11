const fs = require("fs/promises");
const contacts = require("./db");
const { program } = require("commander");

const contactsPath = async ({ action, id, name, phone, email }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "getById":
      const contact = await contacts.getById(id);
      return console.log(contact);
    case "add":
      const newCont = await contacts.add({ name, phone, email });
      return console.log(newCont);
    case "delete":
      const delContact = await contacts.deleteContact(id);
      return console.log(delContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// TODO: задокументувати кожну функцію Why?
function listContacts() {
  // ...твій код. Повертає масив контактів.
  contactsPath({ action: "read" });
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  contactsPath({ action: "getById", id: contactId });
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  contactsPath({ action: "delete", id: contactId });
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
  contactsPath({ action: "add", name: name, email: email, phone: ehone });
}

// 4 tests

// listContacts();

// getContactById("drsAJ4SHPYqZeG-83QTVW");

// addContact("kek", "heh", "444");

// removeContact("230233");

program
  .option("--action, <type>")
  .option("--id, <type>")
  .option("--name, <type>")
  .option("--phone, <type>")
  .option("--email, <type>");

program.parse();

const options = program.opts();
// contacts.contactsPath(options);
contactsPath(options);

//node contacts --action read

//node contacts --action getById --id rsKkOQUi80UsgVPCcLZZW

//node contacts --action add --name Hehhm --phone 7777777 --email ddd@mail.com

//node contacts --action delete --id 230233
