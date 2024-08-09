import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
export declare class PaymentsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createPaymentDto: Prisma.RentalPaymentCreateInput): Prisma.Prisma__RentalPaymentClient<{
        id: number;
        tenantAddress: string;
        ownerAddress: string;
        amount: number;
        paymentDate: Date;
        createdAt: Date;
        paymentType: import(".prisma/client").$Enums.PaymentType;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        tenantAddress: string;
        ownerAddress: string;
        amount: number;
        paymentDate: Date;
        createdAt: Date;
        paymentType: import(".prisma/client").$Enums.PaymentType;
    }[]>;
    findOne(id: number): Prisma.Prisma__RentalPaymentClient<{
        id: number;
        tenantAddress: string;
        ownerAddress: string;
        amount: number;
        paymentDate: Date;
        createdAt: Date;
        paymentType: import(".prisma/client").$Enums.PaymentType;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updatePaymentDto: Prisma.RentalPaymentUpdateInput): Prisma.Prisma__RentalPaymentClient<{
        id: number;
        tenantAddress: string;
        ownerAddress: string;
        amount: number;
        paymentDate: Date;
        createdAt: Date;
        paymentType: import(".prisma/client").$Enums.PaymentType;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__RentalPaymentClient<{
        id: number;
        tenantAddress: string;
        ownerAddress: string;
        amount: number;
        paymentDate: Date;
        createdAt: Date;
        paymentType: import(".prisma/client").$Enums.PaymentType;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
