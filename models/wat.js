import mongoose from "mongoose";

const watSchema = new mongoose.Schema({
    word: {type: String, required: true},
      date: {type: Date, default: Date.now},
});

const Wat = mongoose.model("Wat", watSchema);

export {Wat};