import { Document } from 'mongoose';

export interface Action extends Document{
    readonly Title: String;
    readonly Area: String;
    readonly Description: String;
    readonly Comments: String;
    readonly Priority: int;
    readonly Due_Date: Date;
    readonly Created_At: Date;
}
