const jwt = require("jsonwebtoken");

const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken) {
  console.log("Missing param");
  return;
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

if (option === "sign") {
  const token = signToken({ sub: nameOrToken }, secret);
  console.log(token);
} else if (option === "verify") {
  const data = verifyToken(nameOrToken, secret);
  console.log(data);
} else {
  console.log("Option needs to be sign or verify");
}
