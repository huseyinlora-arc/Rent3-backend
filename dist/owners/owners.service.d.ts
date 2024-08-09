import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class OwnersService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createOwnerDto: Prisma.PropertyOwnerCreateInput): Prisma.Prisma__PropertyOwnerClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Prisma.Prisma__PropertyOwnerClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateOwnerDto: Prisma.PropertyOwnerUpdateInput): Prisma.Prisma__PropertyOwnerClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__PropertyOwnerClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
