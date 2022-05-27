const MessageModel = (sequelize, Sequelize) => {
  const MessageTable = sequelize.define('messageData', {
    message: {
      type: Sequelize.STRING,
    },
    time: {
      type: Sequelize.STRING,
    },
    avatarNumber: {
      type: Sequelize.STRING,
    },
  });
  return MessageTable;
};

export default MessageModel;
