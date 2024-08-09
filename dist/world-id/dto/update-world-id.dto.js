"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorldIdDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_world_id_dto_1 = require("./create-world-id.dto");
class UpdateWorldIdDto extends (0, mapped_types_1.PartialType)(create_world_id_dto_1.CreateWorldIdDto) {
}
exports.UpdateWorldIdDto = UpdateWorldIdDto;
//# sourceMappingURL=update-world-id.dto.js.map