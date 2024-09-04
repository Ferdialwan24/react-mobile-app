import mongoose from "mongoose"

const GarageSchema = new mongoose.Schema(
    {
        doorState: { type: String },
        carState: { type: String },
    }
);

module.exports = mongoose.models.Garage || mongoose.model("Garage", GarageSchema)