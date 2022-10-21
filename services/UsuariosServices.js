const data = require("../databases/usuarios.json");
const fs = require("fs");
function listar() {
  const dataFormat = data.map((pessoa) => {
    return {
      id: pessoa.id,
      name: pessoa.nome,
      email: pessoa.email,
    };
  });
  console.table(dataFormat);
}
function listarNomes() {
  console.table(data.map((usuario) => usuario.nome));
}
listarNomes();
// listar();
function salvar(arrayDeUsuarios) {
  let users = data;
  users.push(JSON.stringify(arrayDeUsuarios));
  fs.writeFileSync("databases/usuarios.json", JSON.stringify(users, null, 4));
}

function cadastrar(objeto) {
  let usuario = {
    nome: objeto.nome,
    email: objeto.email,
    senha: objeto.senha,
    endereco: objeto.endereco,
    formasDePagamento: objeto.formasDePagamento,
  };
  const usuarios = fs.readFileSync("databases/usuarios.json");
  data.push(usuario);
  const esc = fs.writeFileSync("databases/usuarios.json");
  console.log(esc);
}
// let user = {
//   nome: "asd",
//   email: "asd",
//   senha: "asd",
//   endereco: "asd",
//   formasDePagamento: [],
// };
// cadastrar(user);
function detalhar(idUsuario) {
  const userId = data.find((user) => {
    return user.id === idUsuario;
  });
  console.log(`nome : ${userId.nome} email : ${userId.email}`);
}
// detalhar(5);
function remover(idDoUsuarioParaRemover) {
  const userId = data.find((user) => {
    return user.id === idUsuario;
  });
}

function alterar(novosDados, idUsuario) {
  // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario) {
  // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario) {
  // Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
  // Seu código aqui
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
