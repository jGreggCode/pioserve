const createHttpError = require("http-errors");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isVerifiedUser = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return next(createHttpError(401, "Access token is missing"));
    }

    const decodeToken = jwt.verify(accessToken, config.accessTokenSecret);

    const user = await User.findById(decodeToken._id).select("-password");
    if (!user) {
      return next(createHttpError(404, "User not found"));
    }

    req.user = user;
    next();
  } catch (error) {
    const err = createHttpError(401, "Invalid access token");
    next(err);
  }
};

module.exports = { isVerifiedUser };
