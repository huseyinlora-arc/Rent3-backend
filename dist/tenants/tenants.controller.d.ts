import { TenantsService } from './tenants.service';
import { Prisma } from '@prisma/client';
export declare class TenantsController {
    private readonly tenantsService;
    constructor(tenantsService: TenantsService);
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
    findOne(id: string): Prisma.Prisma__TenantClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        rentedPropertyId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateTenantDto: Prisma.TenantUpdateInput): Prisma.Prisma__TenantClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        rentedPropertyId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__TenantClient<{
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
