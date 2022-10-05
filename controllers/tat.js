import {Tat} from "../models/tat.js";

const getTat = async (req, res) => {
    try {
        // get 11 random tats with only image field
        const tats = await Tat.aggregate([{ $sample: { size: 11 } }, { $project: { image: 1, _id: 0 } }]);
        
        res.status(200).json(tats);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export { getTat };