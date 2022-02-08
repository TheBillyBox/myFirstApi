module.exports.selectById = async (data) => {
  let response = { status: false };
  try {
    const doc = await data.model.findById(data._id, data.projection);
    response = {
      status: true,
      result: doc,
    };
  } catch (err) {
    console.log('ERROR-repository-selectById: ', err)
  }
  return response;
}

module.exports.save = async (objToSave) => {
  let responseObj = { status: false };
  try {
    const doc = await objToSave.save();
    responseObj = {
      result: doc,
      status: true
    };
  } catch (err) {
    responseObj.error = err;
    console.log('ERROR-reprository-save', err);
  }
  return responseObj;
};

module.exports.findOneAndUpdate = async (data) => {
  let responseObj = { status: false };
  try {
    const doc = await data.model.findOneAndUpdate(data.findQuery, data.updateQuery, { projection: data.projection, new: true});
    responseObj = {
      result: doc,
      status: true
    };
  } catch (err) {
    responseObj.error = err;
    console.log('ERROR-crudRepository-findOneAndUpdate', err);
  }
  return responseObj;
};