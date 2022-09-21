import { Wat } from "../models/wat.js";

const getWat = async (req, res) => {
    try{
    // get 60 wats only field "word" at random from db
    const wats = await Wat.aggregate([{ $sample: { size: 60 } }, { $project: { word: 1, _id: 0 } }]);
    res.status(200).json(wats);}
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
};

export { getWat };
