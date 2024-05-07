import mongoose, { Schema } from "mongoose";

const commentschema = new Schema({
    comment: {
        type: String,
        required: true
    },
    commentby: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Blog",
    }
},
    { timestamps: true }
)

export const Comment = mongoose.model("Comment", commentschema)