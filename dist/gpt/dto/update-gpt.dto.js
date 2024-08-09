"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGptDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_gpt_dto_1 = require("./create-gpt.dto");
class UpdateGptDto extends (0, mapped_types_1.PartialType)(create_gpt_dto_1.CreateGptDto) {
}
exports.UpdateGptDto = UpdateGptDto;
//# sourceMappingURL=update-gpt.dto.js.map