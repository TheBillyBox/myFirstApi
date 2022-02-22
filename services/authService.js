const repository = require('../database/repository');
const User = require('../model/db/userModel');

module.exports.login = async (user) => {
  const response = {status: false};
  try {
    const data = {
      findQuery: {
        mail: user.mail,
        pwd: user.pwd,
      },
      model: User,
    };
    const resFromRepo = await repository.findOne(data);
    if (resFromRepo.status) {
      response.status = true;
      response.result = resFromRepo.result;
    }
  } catch (err) {
    console.log('ERROR-authService-login: ', err);
  }
  return response;
};