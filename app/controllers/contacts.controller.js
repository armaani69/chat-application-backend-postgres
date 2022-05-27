import dataBase from '../models/index.js';

const Contacts = dataBase.contacts;
const Op = dataBase.Sequelize.Op;

export const createContact = async (req, res) => {
  const contactData = {
    contactName: req.body.contactName,
    contactImageString: req.body.contactImageString,
  };
  Contacts.create(contactData)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error));
};

export const getContacts = async (req, res) => {
  Contacts.findAll({})
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
};
