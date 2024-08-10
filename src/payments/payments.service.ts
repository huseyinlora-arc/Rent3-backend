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
      throw new HttpException("Forbidden", HttpStatus.BAD_REQUEST);
    }

    console.log("dto: ", createPaymentDto);
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
    console.log("Making request to: ", url);
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
    console.log(data);
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
