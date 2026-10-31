const mongoose = require("mongoose");
const Item = require("../models/Item");

const getItems = async (req, res, next) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json({ count: items.length, items });
  } catch (error) { next(error); }
};

const getItemById = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: "Invalid item ID" });
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) { next(error); }
};

const createItem = async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) { next(error); }
};

const updateItem = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: "Invalid item ID" });
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) { next(error); }
};

const deleteItem = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: "Invalid item ID" });
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted successfully", item });
  } catch (error) { next(error); }
};

module.exports = { getItems, getItemById, createItem, updateItem, deleteItem };
