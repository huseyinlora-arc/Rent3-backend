import { WorldIdService } from './world-id.service';
import { CreateWorldIdDto } from './dto/create-world-id.dto';
import { UpdateWorldIdDto } from './dto/update-world-id.dto';
import { ISuccessResult } from '@worldcoin/idkit';
export declare class WorldIdController {
    private readonly worldIdService;
    constructor(worldIdService: WorldIdService);
    create(createWorldIdDto: CreateWorldIdDto): string;
    verify(data: ISuccessResult): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateWorldIdDto: UpdateWorldIdDto): string;
    remove(id: string): string;
}
