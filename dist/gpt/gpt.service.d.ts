import { CreateGptDto } from './dto/create-gpt.dto';
import { UpdateGptDto } from './dto/update-gpt.dto';
export declare class GptService {
    create(createGptDto: CreateGptDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGptDto: UpdateGptDto): string;
    remove(id: number): string;
}
