import * as mongoose from 'mongoose';

export const ActionSchema = new mongoose.Schema({
    Title: String, 
    Area: String,
    Description: String,
    Comments: String,
    Priority: int,
    Due_Date: Date,
    Created_At: { type: Date, default: Date.now}
})

