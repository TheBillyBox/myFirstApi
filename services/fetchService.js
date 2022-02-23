module.exports.getAllUsers = async (page) => {
  let response = { status: false };
  try {
    const promise = await fetch(`https://reqres.in/api/users/?page=${page}`);
    const posts = await promise.json();
    return response = {
      status: true,
      body: posts,
    };
  } catch (e) {
    console.log('ERROR fetchService, getAllPosts', err);
  }
  return response;
}

module.exports.getSingleUser = async (id) => {
  let response = { status: false };
  try {
    const promise = await fetch(`https://reqres.in/api/users/${id}`);
    const posts = await promise.json();
    return response = {
      status: true,
      body: posts,
    };
  } catch (e) {
    console.log('ERROR fetchService, getAllPosts', err);
  }
  return response;
}

module.exports.login = async (user) => {
  let response = { status: false };
  try {
    const promise = await fetch(`https://reqres.in/api/login`, {
      body: JSON.stringify(user), 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const posts = await promise.json();
    response = {
      status: true,
      body: posts,
    };
    if (body.error) {
      response.status = false
    }
  } catch (err) {
    console.log('ERROR fetchService, getAllPosts', err);
  }
  return response;
}