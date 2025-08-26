require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const conn = require("./conn/db");
const imovelRoutes = require("./Routes/RoutesImovel");
const {
  Usuario,
  Imovel,
  Unidade,
  Morador,
  Pagamentos,
  Config,
} = require("./Models/associations");
const authRoutes = require("./Routes/RoutesAuth");
const pagamentosRoutes = require("./Routes/RoutesPagamentos");
const port = process.env.APP_PORT;

const allowedOrigins = [
  "https://www.alugai.app.br/login",
  "https://alugairailway-alugai.up.railway.app",
  "https://allesonsales.github.io",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Não permitido por CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/imoveis", imovelRoutes);
app.use("/usuario", authRoutes);
app.use("/pagamentos", pagamentosRoutes);

try {
  conn.sync().then(() => {
    app.listen(port);
    console.log("Servidor rodando com sequelize");
  });
} catch (error) {
  console.log(error);
}

// https://allesonsales.github.io http://localhost:4200
