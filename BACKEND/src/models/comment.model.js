import mongoose, { Schema } from "mongoose";

const commentschema = new Schema({
    comment: {
        type: String,
        required: true
    },
    commentby: {
        type: String,
        ref: "User"
    }
},
    { timestamps: true }
)

export const Comment = mongoose.model("Comment", commentschema)