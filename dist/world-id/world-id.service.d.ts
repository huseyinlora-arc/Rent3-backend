import { CreateWorldIdDto } from './dto/create-world-id.dto';
import { UpdateWorldIdDto } from './dto/update-world-id.dto';
import { ISuccessResult } from '@worldcoin/idkit';
import 'dotenv/config';
export declare class WorldIdService {
    create(createWorldIdDto: CreateWorldIdDto): string;
    verify(proof: ISuccessResult): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateWorldIdDto: UpdateWorldIdDto): string;
    remove(id: number): string;
}
