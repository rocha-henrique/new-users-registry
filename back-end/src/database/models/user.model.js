const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    cellPhoneNumber: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;