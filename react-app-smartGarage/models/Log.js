import mongoose from "mongoose";

const LogSchema = new mongoose.Schema(
    {
        id: { type: Number },
        name: { type: String },
        status: { type: String },

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.models.Log || mongoose.model('Log', LogSchema)