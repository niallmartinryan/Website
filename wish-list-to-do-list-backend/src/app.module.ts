import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ActionModule } from './action/action.module';

@Module({
imports: [MongoosModule.forRoot('mongodb://localhost/customer-app',{ useNewUrlParser: true},ActionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
