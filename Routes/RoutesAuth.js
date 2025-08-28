const express = require("express");
const AuthController = require("../controller/authController");
const ImovelController = require("../controller/imovelController");
const authMiddleware = require("../middlewares/authMiddleware");
const authRoutes = express.Router();

authRoutes.post("/login", AuthController.login);
authRoutes.post("/registrar", AuthController.cadastrarUsuario);
authRoutes.post("/verificar-sessao", AuthController.getToken);
authRoutes.post("/logout", AuthController.logout);
authRoutes.post("/buscar-usuario", AuthController.encontrarUsuario);
authRoutes.post("/encontrar-usuario-id", AuthController.buscarUsuarioPorId);
authRoutes.post("/atualizar-usuario", AuthController.atualizarUsuario);
authRoutes.post("/alterar-senha", AuthController.alterarSenha);
authRoutes.delete(
  "/deletar-conta",
  authMiddleware,
  ImovelController.deletarConta
);

module.exports = authRoutes;
