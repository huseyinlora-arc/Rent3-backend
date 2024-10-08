import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { OwnersService } from "./owners.service";
import { Prisma } from "@prisma/client";

@Controller("owners")
export class OwnersController {
  constructor(private readonly ownersService: OwnersService) {}

  @Post()
  create(@Body() createOwnerDto: Prisma.PropertyOwnerCreateInput) {
    return this.ownersService.create(createOwnerDto);
  }

  @Get()
  findAll() {
    return this.ownersService.findAll();
  }

  @Get(":nullifierHash")
  findOne(@Param("nullifierHash") hash: string) {
    return this.ownersService.findOne(hash);
  }

  @Get(":nullifierHash/properties")
  findProperties(@Param("nullifierHash") hash: string) {
    return this.ownersService.findProperties(hash);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateOwnerDto: Prisma.PropertyOwnerUpdateInput,
  ) {
    return this.ownersService.update(+id, updateOwnerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ownersService.remove(+id);
  }
}
