import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class PaymentsService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createPaymentDto: Prisma.RentalPaymentCreateInput) {
    // Create the payment
    this.databaseService.rentalPayment.create({
      data: createPaymentDto,
    });

    // Assign the tenant to the property
    this.databaseService.property.update({
      data: {
        tenantAddress: createPaymentDto.tenant.connect.walletAddress,
      },
      where: { id: createPaymentDto.property.connect.id },
    });
  }

  findAll() {
    return this.databaseService.rentalPayment.findMany();
  }

  findOne(id: number) {
    return this.databaseService.rentalPayment.findUniqueOrThrow({
      where: { id },
    });
  }
}
