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
    async getAllAction(@Res() res) {
        const actions = await this.actionService.getAllAction();
        return res.status(HttpStatus.OK).json(actions);
    }

    // Fetch a particular action using ID
    @Get('action/:actionID')
    async getAction(@Res() res, @Param('actionID') actionID) {
        const action = await this.actionService.getAction(actionID);
        if (!action) throw new NotFoundException('Action does not exist!');
        return res.status(HttpStatus.OK).json(action);
    }
// Update a customer's details
    @Put('/update')
    async updateCustomer(@Res() res, @Query('customerID') customerID, @Body() createCustomerDTO: CreateCustomerDTO) {
        const customer = await this.customerService.updateCustomer(customerID, createCustomerDTO);
        if (!customer) throw new NotFoundException('Customer does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Customer has been successfully updated',
            customer
        });
    }

    // Delete a customer
    @Delete('/delete')
    async deleteCustomer(@Res() res, @Query('customerID') customerID) {
        const customer = await this.customerService.deleteCustomer(customerID);
        if (!customer) throw new NotFoundException('Customer does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Customer has been deleted',
            customer
        })
    }
}
