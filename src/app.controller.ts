import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

type apartType = {
  id: string;
  address: string;
  owner: string;
  rented: boolean;
  renter: string;
  renterWallet: string;
  renterProof: string;
};

type userCreateType = {
  walletAddress: string;
  nullifierHash: string;
  zkProof: string;
  verificationLevel: string;
  rentedAparts: apartType
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/user/create')
  async createUser(@Body() data: userCreateType) {
    return 'User created';
  }
}
