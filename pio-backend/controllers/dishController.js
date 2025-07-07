const createHttpError = require("http-errors");
const Dish = require("../models/dishModel");
const mongoose = require("mongoose");

const addDish = async (req, res, next) => {
  try {
    const dish = Dish(req.body);
    await dish.save();
    res.status(201).json({
      success: true,
      message: "Dish added successfully",
      data: dish,
    });
  } catch (error) {
    next(error);
  }
};

const getDishById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(400, "Invalid dish ID");
      return next(error);
    }
    const dish = await Dish.findById(id);
    if (!dish) {
      const error = createHttpError(404, "Dish not found");
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: dish,
    });
  } catch (error) {
    next(error);
  }
};

const getDishes = async (req, res, next) => {
  try {
    const dish = await Dish.find();
    res.status(200).json({
      success: true,
      data: dish,
    });
  } catch (error) {
    next(error);
  }
};

const updateDish = async (req, res, next) => {
  try {
    const { name, price, category, subCategory } = req.body;
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(400, "Invalid dish ID");
      return next(error);
    }

    const dish = await Dish.findByIdAndUpdate(
      id,
      { name, price, category, subCategory },
      { new: true }
    );

    if (!dish) {
      const error = createHttpError(404, "Dish not found");
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: "Dish updated successfully",
      data: dish,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addDish, getDishById, getDishes, updateDish };
