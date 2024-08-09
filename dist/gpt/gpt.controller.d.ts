import { GptService } from './gpt.service';
import { CreateGptDto } from './dto/create-gpt.dto';
import { UpdateGptDto } from './dto/update-gpt.dto';
export declare class GptController {
    private readonly gptService;
    constructor(gptService: GptService);
    create(createGptDto: CreateGptDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGptDto: UpdateGptDto): string;
    remove(id: string): string;
}
