"use strict"
const jwt = require("jsonwebtoken");
const asyncHandler = require("../helpers/asyncHandler");
const { AuthFailError, NotFoundError } = require("../core/error.response");
const { findByUserId } = require("../services/keytoken.service");
const HEADER = {
  API_KEY: "x-api-key",
  AUTHORIZATION: "authorization",
  CLIENT_ID: "x-client-id",
  REFRESHTOKEN: "refreshtoken",
};

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    const accessToken = jwt.sign(payload, publicKey, {
      expiresIn: "2 days",
    });
    const refreshToken = jwt.sign(payload, privateKey, {
      expiresIn: "7 days",
    });
    jwt.verify(accessToken, publicKey, (decode, err) => {
      if (err) {
        console.log("Fail to verify tokeb", err);
      } else {
        console.log("Decode verify", decode);
      }
    });
    return { accessToken, refreshToken };
  } catch (e) {
    throw e;
  }
};

const authentication = asyncHandler( async (req, res, next) => {
    const userId = req.headers[HEADER.CLIENT_ID]
    if (!userId) throw new AuthFailError("userID Invalid request")
    
    const keyStore = await findByUserId(userId)
    if (!keyStore) throw new NotFoundError("keyStore not found request")
    
    const accessToken = await req.headers[HEADER.AUTHORIZATION];
    if (!accessToken) throw new NotFoundError("access not found token")
    
    try {
        const decode = jwt.verify(accessToken, keyStore.publicKey)
        if (userId !== decode.userId) {
            throw new AuthFailError("Invalid decode")
        }
        req.keyStore = keyStore
        req.user = decode
        return next()
    } catch (e) {
        throw error
    }
)}

const verifyToken = (token, keySecret) => {
  const decodedToken = jwt.verify(token, keySecret);
  return decodedToken;
};

module.exports = {
  createTokenPair,
  verifyToken,
};
