import { Schema, model, models } from "mongoose";
import Subject from "./subject";

const classSchema = new Schema({
    className: {
        type: String,
        required: true
    },
    subjectID:{
        type:Schema.ObjectID
    }
});

