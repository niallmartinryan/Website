// ./src/action/action.controller.ts
import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ActionService } from './action.service';
import { CreateActionDTO } from './dto/create-action.dto';

@Controller('action')
export class ActionController {
    constructor(private actionService: ActionService) { }

    // add a action
    @Post('/create')
    async addAction(@Res() res, @Body() createActionDTO: CreateActionDTO) {
        const action = await this.actionService.addAction(createActionDTO);
        return res.status(HttpStatus.OK).json({
            message: "Action has been created successfully",
            action
        })
    }

    // Retrieve actions list
    @Get('actions')
    async getAllActions(@Res() res) {
        const actions = await this.actionService.getAllActions();
        return res.status(HttpStatus.OK).json(actions);
    }

    // Fetch a particular action using ID
    @Get('action/:actionID')
    async getAction(@Res() res, @Param('actionID') actionID) {
        const action = await this.actionService.getAction(actionID);
        if (!action) throw new NotFoundException('Action does not exist!');
        return res.status(HttpStatus.OK).json(action);
    }
// Update a action's details
    @Put('/update')
    async updater(@Res() res, @Query('actionID') actionID, @Body() createActionDTO: CreateActionDTO) {
        const action = await this.actionService.updateAction(actionID, createActionDTO);
        if (!action) throw new NotFoundException('Action does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Action has been successfully updated',
            action
        });
    }

    // Delete a action
    @Delete('/delete')
    async deleteAction(@Res() res, @Query('actionID') actionID) {
        const action = await this.actionService.deleteAction(actionID);
        if (!action) throw new NotFoundException('Action does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Action has been deleted',
            action
        })
    }
}
