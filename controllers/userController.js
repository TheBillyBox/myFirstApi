const users = 
[{name: 'John', id: '1'},
{name: 'David', id: '2'},
{name: 'Toni', id: '3'}]
const status = {
  ok: 200,
  notFound: 400
}
module.exports.list = (req, res) => {
  //petició a la bbdd per obtenir usuaris
  // console.log(req.query.orden)
  // console.log(req)
  res.status(status.ok).send(users)
}
module.exports.profile = (req, res) => {
  //Petició a la bbdd per obtenir les dades del user
  const msgError = {error: 'El id de usuario no existe'}
  console.log(req.params)
  const user = users.find((user) => user.id == req.params.userId);
  if (user) {
    res.status(status.ok).send(user)
  } else {
    res.status(status.notFound).send(msgError)
  }
  
}