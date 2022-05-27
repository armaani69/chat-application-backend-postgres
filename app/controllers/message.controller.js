import dataBase from '../models/index.js';

const Message = dataBase.messages;

export const sendMessage = async (req, res) => {
  const message = {
    message: req.body.message,
    time: req.body.time,
    avatarNumber: req.body.avatarNumber,
  };
  Message.create(message)
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error));
};

export const getMessages = async (req, res) => {
  Message.findAll({})
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error));
};
