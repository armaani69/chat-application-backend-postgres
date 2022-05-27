import express from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';

const messageRoutes = express.Router();

messageRoutes.post('/sendMessage', sendMessage);

messageRoutes.get('/getMessages', getMessages);

export default messageRoutes;
