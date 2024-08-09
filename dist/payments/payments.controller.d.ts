import { PaymentsService } from './payments.service';
import { Prisma } from '@prisma/client';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
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
    findOne(id: string): Prisma.Prisma__RentalPaymentClient<{
        id: number;
        tenantAddress: string;
        ownerAddress: string;
        amount: number;
        paymentDate: Date;
        createdAt: Date;
        paymentType: import(".prisma/client").$Enums.PaymentType;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePaymentDto: Prisma.RentalPaymentUpdateInput): Prisma.Prisma__RentalPaymentClient<{
        id: number;
        tenantAddress: string;
        ownerAddress: string;
        amount: number;
        paymentDate: Date;
        createdAt: Date;
        paymentType: import(".prisma/client").$Enums.PaymentType;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__RentalPaymentClient<{
        id: number;
        tenantAddress: string;
        ownerAddress: string;
        amount: number;
        paymentDate: Date;
        createdAt: Date;
        paymentType: import(".prisma/client").$Enums.PaymentType;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
