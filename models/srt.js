import mongoose from "mongoose";

const srtSchema = new mongoose.Schema({
    situation: {type: String, required: true},
    date: {type: Date, default: Date.now},
});

const Srt = mongoose.model("Srt", srtSchema);

export {Srt};