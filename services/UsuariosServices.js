const data = require("../databases/usuarios.json");
const fs = require("fs");


function getUsers() {
  return data.map((user)=>{
    return user;
  })
}
const filterUser= (user) => {
  const filteredUser = {
    id : user.id,
    nome:user.nome,
    email:user.email
  }
  return filteredUser;
}
const listar = () => {
  const userArray = getUsers();
  const filteredUsers = userArray.map(filterUser);
  console.table(filteredUsers);
  
  

  // const dataFormat = data.map((user) => {
  //   return {
  //     id: user.id,
  //     name: user.nome,
  //     email: user.email,
  //   };
  // });
  // console.table(dataFormat);
}
// listar();
const listarNomes = ()=> {
  console.table(data.map((usuario) => usuario.nome));
}
// listarNomes();
// listar();
const salvar = (arrayDeUsuarios) => {
  let users = data;
  users.push(JSON.stringify(arrayDeUsuarios));
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(users, null, 4));
}
// function buscar(trecho) {
//   let temTrechoNoNome = usuario => {
//     return usuario.nome.includes(trecho);
//   };
//   let usuariosComNomesBuscados = data.filter(temTrechoNoNome);
//   return usuariosComNomesBuscados;
// }
// buscar("ale");
const cadastrar= (user)=> {
  let usuario = {
    id:id(),
    nome: user.nome,
    email: user.email,
    senha: user.senha,
    endereco: user.endereco,
    formasDePagamento: user.formasDePagamento,

  }; 
  // console.log(usuario)
  data.push(usuario);
  console.log(data)
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(data,null,4));
}
const id = ()=>{
  // console.log("log",data[data.length - 1] )
  // console.log("data",data[data.length-1]);
  const newId = data[data.length-1].id+1;
  return newId;
}
id();

let user = {
  nome: "jose",
  email: "asd",
  senha: "asd",
  endereco: "asd",
  formasDePagamento: [],
};
// cadastrar(user);
const detalhar = (idUsuario) => {
  const userId = data.find(user => {
    return user.id === idUsuario;
  });
  console.log(`nome : ${userId.nome} email : ${userId.email}`);
}
// detalhar(5);
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
function findUser(id){

  const users = getUsers();
  const user = users.find((user) => {
    
    return user.id === id;
  })
  return user;
}

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
  
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
  // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
  // Seu código aqui
}

function alterarFormaDePagamento(
  novaFormaDePagamento,
  posicaoDaFormaDePagamento,
  idUsuario
) {
  // Seu código aqui
}

const UsuariosServices = {
  cadastrar,
  listar,
  detalhar,
  remover,
  alterar,
  addEndereco,
  removerEndereco,
  alteraEndereco: alterarEndereco,
  addFormaDePagamento,
  removerFormaDePagamento,
  alterarFormaDePagamento,
  listarNomes,
};

module.exports = UsuariosServices;
