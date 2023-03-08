const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const JWTD = require("jwt-decode");
const hashing = async (value) => {
  try {
    const salt = await bcrypt.genSalt(10);
    console.log("Salt", salt);
    const hash = await bcrypt.hash(value, salt);
    return hash;
  } catch (error) {
    console.log(error);
  }
};

const hashCompare = async (password, hashValue) => {
  try {
    return await bcrypt.compare(password, hashValue);
  } catch (error) {
    console.log(error);
  }
};

const createJWT = async (email) => {
  return await JWT.sign(email, "bsdfjkefjkefjkdj", { expiresIn: "2m" });
};

const authentication = async (token) => {
  const decode = JWTD(token);
  if (Math.round(new Date() / 1000) < decode.exp) {
    return {
      email: decode.email,
      validity: true,
    };
  } else {
   
    return {
      email: decode.email,
      validity: false,
    };
  }
};

module.exports = { hashCompare, hashing, createJWT, authentication };
