import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class OwnersService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createOwnerDto: Prisma.PropertyOwnerCreateInput) {
    return this.databaseService.propertyOwner.create({ data: createOwnerDto });
  }

  findAll() {
    return this.databaseService.propertyOwner.findMany();
  }

  findOne(nullifierHash: string) {
    try {
      return this.databaseService.propertyOwner.findUniqueOrThrow({
        where: { nullifierHash },
      });
    } catch (error) {
      throw new HttpException("User does not exist.", HttpStatus.NOT_FOUND);
    }
  }

  update(id: number, updateOwnerDto: Prisma.PropertyOwnerUpdateInput) {
    return this.databaseService.propertyOwner.update({
      data: updateOwnerDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.databaseService.propertyOwner.delete({ where: { id } });
  }
}
