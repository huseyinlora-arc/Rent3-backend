import { OwnersService } from './owners.service';
import { Prisma } from '@prisma/client';
export declare class OwnersController {
    private readonly ownersService;
    constructor(ownersService: OwnersService);
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
    findOne(id: string): Prisma.Prisma__PropertyOwnerClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateOwnerDto: Prisma.PropertyOwnerUpdateInput): Prisma.Prisma__PropertyOwnerClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__PropertyOwnerClient<{
        id: number;
        walletAddress: string;
        nullifierHash: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
