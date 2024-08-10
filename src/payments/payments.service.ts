import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class PaymentsService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createPaymentDto: Prisma.RentalPaymentCreateInput) {
    // Validate the payment transaction
    if (!this.validateTransaction(createPaymentDto.transactionHash)) {
      throw new HttpException("Forbidden", HttpStatus.BAD_REQUEST);
    }
    // Create the payment
    const paymentData = this.databaseService.rentalPayment.create({
      data: createPaymentDto,
    });

    // Assign the tenant to the property
    this.databaseService.property.update({
      data: {
        tenantAddress: createPaymentDto.tenant.connect.walletAddress,
      },
      where: { id: createPaymentDto.property.connect.id },
    });

    return paymentData;
  }

  findAll() {
    return this.databaseService.rentalPayment.findMany();
  }

  async validateTransaction(transactionHash: string) {
    const data: any = fetch(
      `https://sepolia.explorer.mode.network/api/v2/transactions/${transactionHash}`,
      {
        headers: {
          accept: "application/json",
        },
      },
    )
      .then((res) => res.json())
      .catch((e) => {
        console.log(e);
      });
    return data.status && data.status === "ok";
  }

  findOne(id: number) {
    return this.databaseService.rentalPayment.findUniqueOrThrow({
      where: { id },
    });
  }
}
