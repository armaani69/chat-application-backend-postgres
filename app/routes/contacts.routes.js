import express from 'express';
import {
  createContact,
  getContacts,
} from '../controllers/contacts.controller.js';

const contactsRoutes = express.Router();

contactsRoutes.post('/createContact', createContact);

contactsRoutes.get('/getContacts', getContacts);

export default contactsRoutes;
