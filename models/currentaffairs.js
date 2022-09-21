import mongoose from "mongoose";

const currentaffairsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    url: {type: String, required: true},
    date: {type: Date, default: Date.now},
});

currentaffairsSchema.path('image').validate((val)=> {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

currentaffairsSchema.path('url').validate((val)=> {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

const Currentaffairs = mongoose.model("Currentaffairs", currentaffairsSchema);

export default Currentaffairs;