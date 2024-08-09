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
exports.WorldIdController = void 0;
const common_1 = require("@nestjs/common");
const world_id_service_1 = require("./world-id.service");
const create_world_id_dto_1 = require("./dto/create-world-id.dto");
const update_world_id_dto_1 = require("./dto/update-world-id.dto");
let WorldIdController = class WorldIdController {
    constructor(worldIdService) {
        this.worldIdService = worldIdService;
    }
    create(createWorldIdDto) {
        return this.worldIdService.create(createWorldIdDto);
    }
    async verify(data) {
        return await this.worldIdService.verify(data);
    }
    findAll() {
        return this.worldIdService.findAll();
    }
    findOne(id) {
        return this.worldIdService.findOne(+id);
    }
    update(id, updateWorldIdDto) {
        return this.worldIdService.update(+id, updateWorldIdDto);
    }
    remove(id) {
        return this.worldIdService.remove(+id);
    }
};
exports.WorldIdController = WorldIdController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_world_id_dto_1.CreateWorldIdDto]),
    __metadata("design:returntype", void 0)
], WorldIdController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/verify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorldIdController.prototype, "verify", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WorldIdController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorldIdController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_world_id_dto_1.UpdateWorldIdDto]),
    __metadata("design:returntype", void 0)
], WorldIdController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorldIdController.prototype, "remove", null);
exports.WorldIdController = WorldIdController = __decorate([
    (0, common_1.Controller)('world-id'),
    __metadata("design:paramtypes", [world_id_service_1.WorldIdService])
], WorldIdController);
//# sourceMappingURL=world-id.controller.js.map