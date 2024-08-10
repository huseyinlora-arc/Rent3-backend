import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { assert } from "console";
import axios from "axios";

const prisma = new PrismaClient();
async function main() {
  const properties = await prisma.property.findMany();
  const tenants = await prisma.tenant.findMany();

  await axios
    .post("http://localhost:8080/payments", {
      tenantAddress: tenants[2].walletAddress,
      ownerAddress: properties[2].ownerAddress,
      amount: properties[2].rentalPrice,
      propertyId: properties[2].id,
      transactionHash:
        "0x107a887835392a83360e028b55127953cd189cae82257a56a11fedd2eb1ca918",
    })
    .then((res) => res.data)
    .catch((e) => console.error(e));
  console.log("Payment 1 created successfully");

  await axios
    .post("http://localhost:8080/payments", {
      tenantAddress: tenants[2].walletAddress,
      ownerAddress: properties[2].ownerAddress,
      amount: properties[2].rentalPrice,
      propertyId: properties[2].id,
      transactionHash: faker.finance.ethereumAddress(),
    })
    .then((res) => res.data)
    .catch((e) => console.error(e));
  console.log("Payment 2 Failed successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
