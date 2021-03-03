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
exports.GhLinkQueries = void 0;
const class_validator_1 = require("class-validator");
class GhLinkQueries {
}
__decorate([
    class_validator_1.IsUrl({ protocols: ['https'], host_whitelist: ['github.com'] }),
    __metadata("design:type", String)
], GhLinkQueries.prototype, "ghUrl", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(3),
    __metadata("design:type", String)
], GhLinkQueries.prototype, "q", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], GhLinkQueries.prototype, "noRedirect", void 0);
exports.GhLinkQueries = GhLinkQueries;
//# sourceMappingURL=gh-link-queries.js.map