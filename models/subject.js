import { Schema, model, models } from "mongoose";

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    level: Number
});

const Subject = models.Subject || model("Subject", subjectSchema);

export default Subject