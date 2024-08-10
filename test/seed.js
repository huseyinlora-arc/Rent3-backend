"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var faker_1 = require("@faker-js/faker");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var owners, properties, tenants, _loop_1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(Array.from({ length: 5 }).map(function () {
                        return prisma.propertyOwner.create({
                            data: {
                                walletAddress: faker_1.faker.finance.ethereumAddress(),
                                nullifierHash: faker_1.faker.string.uuid(),
                                name: faker_1.faker.person.fullName(),
                                email: faker_1.faker.internet.email(),
                            },
                        });
                    }))];
                case 1:
                    owners = _a.sent();
                    return [4 /*yield*/, Promise.all(owners.flatMap(function (owner) {
                            return Array.from({ length: faker_1.faker.number.int({ min: 1, max: 3 }) }).map(function () {
                                return prisma.property.create({
                                    data: {
                                        ownerAddress: owner.walletAddress,
                                        country: faker_1.faker.location.country(),
                                        city: faker_1.faker.location.city(),
                                        address: faker_1.faker.location.streetAddress(),
                                        neighborhood: faker_1.faker.location.county(),
                                        type: faker_1.faker.helpers.enumValue(client_1.PropertyType),
                                        bedrooms: faker_1.faker.number.int({ min: 1, max: 5 }),
                                        bathrooms: faker_1.faker.number.int({ min: 1, max: 3 }),
                                        furnished: faker_1.faker.datatype.boolean(),
                                        floorSizeSqm: faker_1.faker.number.int({ min: 30, max: 300 }),
                                        description: faker_1.faker.lorem.paragraph(),
                                        yearBuilt: faker_1.faker.number.int({ min: 1950, max: 2023 }),
                                        parkingSpaces: faker_1.faker.number.int({ min: 0, max: 2 }),
                                        amenities: faker_1.faker.helpers.arrayElements(Object.values(client_1.Amenity), { min: 1, max: 5 }),
                                        images: Array.from({ length: faker_1.faker.number.int({ min: 1, max: 5 }) }, function () { return faker_1.faker.image.urlLoremFlickr({ category: 'house' }); }),
                                        rentalPrice: parseFloat(faker_1.faker.finance.amount(500, 5000, 2)),
                                        dateAvailable: faker_1.faker.date.future(),
                                    },
                                });
                            });
                        }))];
                case 2:
                    properties = _a.sent();
                    return [4 /*yield*/, Promise.all(Array.from({ length: 10 }).map(function () {
                            return prisma.tenant.create({
                                data: {
                                    walletAddress: faker_1.faker.finance.ethereumAddress(),
                                    nullifierHash: faker_1.faker.string.uuid(),
                                    name: faker_1.faker.person.fullName(),
                                    email: faker_1.faker.internet.email(),
                                },
                            });
                        }))];
                case 3:
                    tenants = _a.sent();
                    _loop_1 = function (i) {
                        var property, tenant;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    property = properties[i];
                                    tenant = tenants[i];
                                    return [4 /*yield*/, prisma.property.update({
                                            where: { id: property.id },
                                            data: { tenantAddress: tenant.walletAddress },
                                        })];
                                case 1:
                                    _b.sent();
                                    return [4 /*yield*/, prisma.rentalPayment.createMany({
                                            data: Array.from({ length: 3 }).map(function () { return ({
                                                tenantAddress: tenant.walletAddress,
                                                ownerAddress: property.ownerAddress,
                                                amount: property.rentalPrice,
                                                paymentDate: faker_1.faker.date.past(),
                                                paymentType: faker_1.faker.helpers.enumValue(client_1.PaymentType),
                                            }); }),
                                        })];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < 5)) return [3 /*break*/, 7];
                    return [5 /*yield**/, _loop_1(i)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    i++;
                    return [3 /*break*/, 4];
                case 7:
                    console.log('Seeding completed successfully!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
