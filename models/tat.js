import mongoose from "mongoose";

const tatSchema = new mongoose.Schema({
    image:{type: String, required:'URL cant be empty'},
    date: {type: Date, default: Date.now},
});

tatSchema.path('image').validate((val)=> {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

const Tat = mongoose.model("Tat", tatSchema);

export {Tat};