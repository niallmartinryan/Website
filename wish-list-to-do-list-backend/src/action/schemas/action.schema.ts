import * as mongoose from 'mongoose';

export const ActionSchema = new mongoose.Schema({
    title: String,
    area: String,
    description: String,
    comments: String,
    priority: Number,
    dueDate: Date,
    created_At: { type: Date, default: Date.now}
})
