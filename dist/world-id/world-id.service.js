"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldIdService = void 0;
const common_1 = require("@nestjs/common");
require("dotenv/config");
let WorldIdService = class WorldIdService {
    create(createWorldIdDto) {
        return 'This action adds a new worldId';
    }
    async verify(proof) {
        const action = process.env.ACTION_ID;
        const id = process.env.WORLD_ID_APP_ID;
        const response = await fetch(`https://developer.worldcoin.org/api/v1/verify/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...proof, action }),
        });
        if (response.ok) {
            const { verified } = await response.json();
            return verified;
        }
        else {
            const { code, detail } = await response.json();
            throw new Error(`Error Code ${code}: ${detail}`);
        }
    }
    findAll() {
        return `This action returns all worldId`;
    }
    findOne(id) {
        return `This action returns a #${id} worldId`;
    }
    update(id, updateWorldIdDto) {
        return `This action updates a #${id} worldId`;
    }
    remove(id) {
        return `This action removes a #${id} worldId`;
    }
};
exports.WorldIdService = WorldIdService;
exports.WorldIdService = WorldIdService = __decorate([
    (0, common_1.Injectable)()
], WorldIdService);
//# sourceMappingURL=world-id.service.js.map