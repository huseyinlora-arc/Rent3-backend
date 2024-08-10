import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { Prisma } from "@prisma/client";
import axios from "axios";

@Injectable()
export class PaymentsService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createPaymentDto: Prisma.RentalPaymentCreateInput) {
    // Validate the payment transaction
    if (!this.validateTransaction(createPaymentDto.transactionHash)) {
      throw new HttpException(
        "Failed to validate transaction hash",
        HttpStatus.BAD_REQUEST,
      );
    }

    // Create the payment
    const paymentData = this.databaseService.rentalPayment.create({
      data: createPaymentDto,
    });

    // Assign the tenant to the property
    this.databaseService.property.update({
      data: {
        tenantAddress: (await paymentData.tenant()).walletAddress,
      },
      where: { id: (await paymentData.property()).id },
    });

    return paymentData;
  }

  findAll() {
    return this.databaseService.rentalPayment.findMany();
  }

  async validateTransaction(transactionHash: string) {
    const url = `https://sepolia.explorer.mode.network/api/v2/transactions/${transactionHash}`;
    const data = await axios
      .get(
        `https://sepolia.explorer.mode.network/api/v2/transactions/${transactionHash}`,
        {
          headers: {
            Accept: "application/json",
          },
        },
      )
      .then((res) => res.data)
      .catch((error) => console.error(error));
    try {
      return data.status && data.status === "ok";
    } catch (error) {
      return false;
    }
  }

  findOne(id: number) {
    return this.databaseService.rentalPayment.findUniqueOrThrow({
      where: { id },
    });
  }
}
