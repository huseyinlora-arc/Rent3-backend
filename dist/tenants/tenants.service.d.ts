import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class TenantsService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createTenantDto: Prisma.TenantCreateInput): Prisma.Prisma__TenantClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        rentedPropertyId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        rentedPropertyId: number | null;
    }[]>;
    findOne(id: number): Prisma.Prisma__TenantClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        rentedPropertyId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateTenantDto: Prisma.TenantUpdateInput): Prisma.Prisma__TenantClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        rentedPropertyId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__TenantClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        rentedPropertyId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
