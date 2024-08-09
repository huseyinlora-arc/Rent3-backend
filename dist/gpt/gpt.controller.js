"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GptController = void 0;
const common_1 = require("@nestjs/common");
const gpt_service_1 = require("./gpt.service");
const create_gpt_dto_1 = require("./dto/create-gpt.dto");
const update_gpt_dto_1 = require("./dto/update-gpt.dto");
let GptController = class GptController {
    constructor(gptService) {
        this.gptService = gptService;
    }
    create(createGptDto) {
        return this.gptService.create(createGptDto);
    }
    findAll() {
        return this.gptService.findAll();
    }
    findOne(id) {
        return this.gptService.findOne(+id);
    }
    update(id, updateGptDto) {
        return this.gptService.update(+id, updateGptDto);
    }
    remove(id) {
        return this.gptService.remove(+id);
    }
};
exports.GptController = GptController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gpt_dto_1.CreateGptDto]),
    __metadata("design:returntype", void 0)
], GptController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GptController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GptController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gpt_dto_1.UpdateGptDto]),
    __metadata("design:returntype", void 0)
], GptController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GptController.prototype, "remove", null);
exports.GptController = GptController = __decorate([
    (0, common_1.Controller)('gpt'),
    __metadata("design:paramtypes", [gpt_service_1.GptService])
], GptController);
//# sourceMappingURL=gpt.controller.js.map