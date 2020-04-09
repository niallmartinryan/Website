import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Action } from './interfaces/action.interface';
import { CreateActionDTO } from './dto/create-action.dto';

@Injectable()
export class ActionService {
    constructor(@InjectModel('Action') private readonly actionModel: Model<Action>) { }
    // fetch all actions
    async getAllActions(): Promise<Action[]> {
        const actions = await this.actionModel.find().exec();
        return actions;
    }
    // Get a single action
    async getAction(actionID): Promise<Action> {
        const action = await this.actionModel.findById(actionID).exec();
        return action;
    }
    // post a single action
    async addAction(createActionDTO: CreateActionDTO): Promise<Action> {
        const newAction = await this.actionModel(createActionDTO);
        return newAction.save(
    }
    // Edit action details
    async updateAction(actionID, createActionDTO: CreateActionDTO): Promise<Action> {
        const updatedAction = await this.actionModel
            .findByIdAndUpdate(actionID, createActionDTO, { new: true });
        return updatedAction;
    }
    // Delete a action
    async deleteAction(actionID): Promise<any> {
        const deletedAction = await this.actionModel.findByIdAndRemove(actionID);
        return deletedAction;
    }
}
