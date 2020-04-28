import { Document } from 'mongoose';

export interface Action extends Document{
    readonly title: String;
    readonly area: String;
    readonly description: String;
    readonly comments: String;
    readonly priority: Number;
    readonly dueDate: Date;
    readonly created_At: Date;
}
