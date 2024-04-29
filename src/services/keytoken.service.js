const { default: mongoose } = require("mongoose");
const { findByIdAndUpdate } = require("../models/keytoken.model");
const keyToken = require("./../models/keytoken.model");
class KeyTokenService {
  static createKeyToken = async ({
    userId,
    publickey,
    privateKey,
    refreshToken,
  }) => {
    try {
      const filter = { user: userId },
        update = {
          publickey,
          privateKey,
          refreshTokenUsed: [],
          refreshToken,
        },
        options = { upsert: true, new: true };
      const tokens = await keyToken.findByIdAndUpdate(filter, update, options);
      return tokens ? tokens.publicKey : null;
    } catch (e) {
      return e;
    }
  };

  static findByUserId = async (userId) => {
    return await keyToken
      .findOne({ user: mongoose.Types.ObjectId(userId) })
      .lean();
  };

  static removeKeyById = async (id) => {
    return await keyToken.deleteOne(id);
  };

  static foundByRefreshTokenUsed = async (refreshToken) => {
    return await keyToken.findOne({
      refreshTokenUsed: refreshToken,
    });
  };
  static deleteKeyById = async (userId) => {
    return await keyToken.deleteOne({ user: userId });
  };
  static findByRefreshToken = async (refreshToken) => {
    return await keyToken.findOne({ refreshToken }).lean();
  };
}

module.exports = KeyTokenService;
