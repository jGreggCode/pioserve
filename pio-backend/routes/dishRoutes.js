const express = require("express");
const {
  addDish,
  getDishes,
  getDishById,
  updateDish,
} = require("../controllers/dishController");
const { isVerifiedUser } = require("../middlewares/tokenVerification");
const router = express.Router();

router.route("/").post(isVerifiedUser, addDish);
router.route("/").get(isVerifiedUser, getDishes);
router.route("/:id").get(isVerifiedUser, getDishById);
router.route("/:id").put(isVerifiedUser, updateDish);

module.exports = router;
