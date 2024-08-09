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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let PropertyService = class PropertyService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createPropertyDto) {
        return this.databaseService.property.create({ data: createPropertyDto });
    }
    findAll() {
        return this.databaseService.property.findMany();
    }
    findOne(id) {
        return this.databaseService.property.findUniqueOrThrow({ where: { id } });
    }
    update(id, updatePropertyDto) {
        return this.databaseService.property.update({
            data: updatePropertyDto,
            where: { id },
        });
    }
    remove(id) {
        return this.databaseService.property.delete({ where: { id } });
    }
};
exports.PropertyService = PropertyService;
exports.PropertyService = PropertyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], PropertyService);
//# sourceMappingURL=property.service.js.map