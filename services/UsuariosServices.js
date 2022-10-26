const data = require("../databases/usuarios.json");
const fs = require("fs");
const bcrypt = require('bcrypt');


function getUsers() {
  return data.map((user)=>{
    return user;
  })
}

const id = ()=>{
  // console.log("log",data[data.length - 1] )
  // console.log("data",data[data.length-1]);
  const newId = data[data.length-1].id+1;
  return newId;
}
const filterUser= (user) => {
  const filteredUser = {
    id : user.id,
    nome:user.nome,
    email:user.email
  }
  return filteredUser;
}
function findUser(id){

  const users = getUsers();
  const user = users.find((user) => {
    
    return user.id === Number(id);
  })
  return user;
}
const listar = () => {
  const userArray = getUsers();
  const filteredUsers = userArray.map(filterUser);
  console.table(filteredUsers);
// console.log(bcrypt.hashSync("123",5))

}
// listar();
const listarNomes = ()=> {
  console.table(data.map((usuario) => usuario.nome));
}
// listarNomes();
const salvar = (arrayDeUsuarios) => {
  let users = getUsers();
  users.push(JSON.stringify(arrayDeUsuarios));
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(users, null, 4));
}


const cadastrar= (user)=> {
  let hash = bcrypt.hashSync(user.senha,5)
  let usuario = {
    id: id(),
    nome: user.nome,
    email: user.email,
    senha: hash,
    enderecos: user.enderecos,
    
    formasDePagamento: user.formasDePagamento,

  }; 
  // console.log(usuario)
  data.push(usuario);
  console.log(data)
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(data,null,4));
}
// cadastrar({
//   nome: "igor",
//   email: 'asdasd',
//   senha: '123',
//   enderecos:["rua sei la","avenida sei la"],
//   formasDePagamento:["avista", "credito"]
// })

let user = {
  nome: "jose",
  email: "asd",
  senha: "asd",
  endereco: "asd",
  formasDePagamento: [],
};
// cadastrar(user);
const detalhar = (idUsuario) => {
  console.log(">>>>", idUsuario)
  console.log(">>>>", Number(idUsuario))
  const userId = data.find(user => {
    return user.id === Number(idUsuario);
  });
  
  if(!userId){
    console.log("id nao encontrado")
    return 
  }
  console.log(`nome : ${userId.nome} email : ${userId.email}`);
}
// detalhar(999);
const remover = (idUser) => {
  const users = getUsers();
  const userToRemove=users.filter((user)=>{
    return user.id!== idUser;
  })
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(userToRemove,null,4));
  console.log(userToRemove);
  //puxar o json // 

}
// remover(4)
function alterar(novosDados, idUsuario) {
     const users = getUsers();
    let user = findUser(idUsuario);
    
    const index = users.indexOf(user)
    users[index].nome = novosDados.nome,
    users[index].email = novosDados.email,
    users[index].senha = novosDados.senha


    
    fs.writeFileSync("databases/usuarios.json", JSON.stringify(users, null,4));

}
let newUser = {
  nome : "sergio",
  email:"segioemail@gamil.com",
  senha:"asdasdasd"
}
// alterar(newUser,128);


function addEndereco(endereco,idUsuario) {
  const user = findUser(idUsuario);
  const users = getUsers();

  const index = users.indexOf(user);

  users[index].enderecos.push(endereco);
  
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(users, null,4))
}
// addEndereco("rua das samambaias",128)







function removerEndereco(posicaoDoEndereco, idUsuario) {
  const users = getUsers();
  const user = findUser(idUsuario)
  // console.log(user,"user");

    // const index = users.indexOf(user);
  user.enderecos.splice(posicaoDoEndereco,1)
  console.log(user);
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(users,null,4))
}

// console.log(removerEndereco(1,128))

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
    console.log({posicaoDoEndereco,novoEndereco,idUsuario})
    const user = findUser(idUsuario);
    const users = getUsers();
    console.log(user,"user")
    // console.log(posicaoDoEndereco)
    user.enderecos[posicaoDoEndereco] = novoEndereco;
    fs.writeFileSync("databases/usuarios.json", JSON.stringify(users,null,4))

}
// alterarEndereco(1,"alouras",128);

function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
  // Seu código aqui
  const user = findUser(idUsuario);
  const users = getUsers();
  user.formasDePagamento.push(novaFormaDePagamento);
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(users,null,4))
}
// addFormaDePagamento("a vista",128);

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
  // Seu código aqui

  user.formasDePagamento.splice(posicaoDaFormaDePagamento,1);
  console.log(user.formasDePagamento.splice(posicaoDaFormaDePagamento,1));
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(users,null,4))
  
}
// removerFormaDePagamento(0,128);

function alterarFormaDePagamento(
  novaFormaDePagamento,
  posicaoDaFormaDePagamento,
  idUsuario
) {
  // Seu código aqui
  const user = findUser(idUsuario);
  const users = getUsers();

  user.formasDePagamento[posicaoDaFormaDePagamento] = novaFormaDePagamento;
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(users,null,4))
}
// alterarFormaDePagamento("CREDITO",0,123);
const UsuariosServices = {
  cadastrar,
  listar,
  detalhar,
  remover,
  alterar,
  addEndereco,
  removerEndereco,
  alterarEndereco,
  addFormaDePagamento,
  removerFormaDePagamento,
  alterarFormaDePagamento,
  listarNomes,
};

module.exports = UsuariosServices;
