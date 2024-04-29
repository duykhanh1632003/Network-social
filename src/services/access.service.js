const { verifyToken, createTokenPair } = require("../auth/authUtils");
const {
  RefreshTokenError,
  BadRequestError,
} = require("../core/error.response");
const bcrypt = require("bcrypt");
const { keyToken } = require("../models/keytoken.model");
const { user } = require("../models/user.model");
const KeyTokenService = require("./keytoken.service");
const { findByEmail } = require("./user.service");
const crypto = require("crypto");

class AccessService {
  static handlerRefreshToken = async (refreshToken) => {
    // Tìm ra refreshToken được sử dụng hay chưa
    const foundToken = await KeyTokenService.foundByRefreshTokenUsed(
      refreshToken
    );
    console.log("Check refresh", foundToken);
    if (foundToken) {
      const { userId, email } = await verifyToken(
        refreshToken,
        foundToken.privateKey
      );
      await KeyTokenService.deleteKeyById(userId);
      throw new RefreshTokenError("Phiên đăng nhập của bạn đã hết hạn");
    }

    // Nếu chưa thì tiếp tục xác thực
    const holderUser = await KeyTokenService.findByRefreshToken(refreshToken);
    if (!holderUser) throw new BadRequestError("User này chưa được đăng ký 1");
    const { userId, email } = verifyToken(refreshToken, holderShop.privateKey);
    const foundUser = await findByEmail({ email });
    if (!foundUser) throw new BadRequestError("User này chưa được đăng ký 2");

    const tokens = await createTokenPair(
      { userId, email },
      holderUser.publicKey,
      holderUser.privateKey
    );
    await keyToken.updateOne(
      { _id: holderShop._id },
      {
        $set: {
          refreshToken: tokens.refreshToken,
        },
        $addToSet: {
          refreshTokensUsed: refreshToken,
        },
      }
    );

    return { user: { userId, email }, tokens };
  };

  static signup = async ({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    gender,
  }) => {
    try {
      const holderUser = await user.findOne({ email }).lean();
      if (holderUser) {
        throw new BadRequestError("User already registered");
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = user.create({
        firstName,
        lastName,
        email,
        password: passwordHash,
        phoneNumber,
        gender,
      });
      if (newUser) {
        const privateKey = crypto.randomBytes(64).toString("hex");
        const publicKey = crypto.randomBytes(64).toString("hex");
        const keyStore = await KeyTokenService.createKeyToken({
          userId: newUser._id,
          publicKey,
          privateKey,
        });
        if (!keyStore) {
          throw new BadRequestError("Cannot create keystore in signup");
        }
        const tokens = await createTokenPair(
          { userId: newUser._id, email },
          publicKey,
          privateKey
        );
        return { user: { userId: newUser._id, email }, tokens };
      }
    } catch (e) {}
  };
}
