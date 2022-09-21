import {Srt} from '../models/srt.js';

const getSrt = async (req, res) => {
    try{
    // get 60 wats only field "word" at random from db
    const srt = await Srt.aggregate([{ $sample: { size: 60 } }, { $project: { situation: 1, _id: 0 } }]);
    res.status(200).json(srt);}
    catch(error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

export { getSrt };