const ContactsModel = (sequelize, Sequelize) => {
  const ContactsTable = sequelize.define('contactsData', {
    contactName: {
      type: Sequelize.STRING,
    },
    contactImageString: {
      type: Sequelize.STRING,
    },
  });
  return ContactsTable;
};

export default ContactsModel;
