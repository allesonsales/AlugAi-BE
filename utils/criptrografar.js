const crypto = require("crypto");
require("dotenv").config();

const algorithm = "aes-256-cbc";
const secret = process.env.RG_SECRET;
const key = crypto.scryptSync(secret, "salt", 32);

function criptografar(dado) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(dado, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
}

function descriptografar(dado) {
  const [ivHex, data] = dado.split(":");
  const iv = Buffer.from(ivHex, "hex");
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(data, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

module.exports = { criptografar, descriptografar };
