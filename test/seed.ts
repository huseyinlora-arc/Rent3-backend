import { PrismaClient, Amenity, PaymentType, PropertyType} from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Create Property Owners
  const owners = await Promise.all(
    Array.from({ length: 5 }).map(() => 
      prisma.propertyOwner.create({
        data: {
          walletAddress: faker.finance.ethereumAddress(),
          nullifierHash: faker.string.uuid(),
          name: faker.person.fullName(),
          email: faker.internet.email(),
        },
      })
    )
  );

  // Create Properties
  const properties = await Promise.all(
    owners.flatMap(owner => 
      Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() => 
        prisma.property.create({
          data: {
            ownerAddress: owner.walletAddress,
            country: faker.location.country(),
            city: faker.location.city(),
            address: faker.location.streetAddress(),
            neighborhood: faker.location.county(),
            type: faker.helpers.enumValue(PropertyType),
            bedrooms: faker.number.int({ min: 1, max: 5 }),
            bathrooms: faker.number.int({ min: 1, max: 3 }),
            furnished: faker.datatype.boolean(),
            floorSizeSqm: faker.number.int({ min: 30, max: 300 }),
            description: faker.lorem.paragraph(),
            yearBuilt: faker.number.int({ min: 1950, max: 2023 }),
            parkingSpaces: faker.number.int({ min: 0, max: 2 }),
            amenities: faker.helpers.arrayElements(Object.values(Amenity), { min: 1, max: 5 }),
            images: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.image.urlLoremFlickr({category: 'house'})),
            rentalPrice: parseFloat(faker.finance.amount(500, 5000, 2)),
            dateAvailable: faker.date.future(),
          },
        })
      )
    )
  );

  // Create Tenants
  const tenants = await Promise.all(
    Array.from({ length: 10 }).map(() => 
      prisma.tenant.create({
        data: {
          walletAddress: faker.finance.ethereumAddress(),
          nullifierHash: faker.string.uuid(),
          name: faker.person.fullName(),
          email: faker.internet.email(),
        },
      })
    )
  );

  // Assign some tenants to properties and create rental payments
  for (let i = 0; i < 5; i++) {
    const property = properties[i];
    const tenant = tenants[i];

    await prisma.property.update({
      where: { id: property.id },
      data: { tenantAddress: tenant.walletAddress },
    });

    await prisma.rentalPayment.createMany({
      data: Array.from({ length: 3 }).map(() => ({
        tenantAddress: tenant.walletAddress,
        ownerAddress: property.ownerAddress,
        amount: property.rentalPrice,
        paymentDate: faker.date.past(),
        paymentType: faker.helpers.enumValue(PaymentType),
      })),
    });
  }

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
