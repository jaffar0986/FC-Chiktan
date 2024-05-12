import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    matches: {
        type: Number,
        required: true,
        default: 0,
    },
    goals: {
        type: Number,
        required: true,
        default: 0,
    },
    active: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Player = mongoose.model("Player", playerSchema);

export default Player;