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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const app_service_1 = require("./app.service");
const gh_link_queries_1 = require("./gh-link-queries");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getGhLink(queries, res) {
        return this.appService.getGhLink(queries.ghUrl, queries.q).pipe((0, operators_1.map)((v) => {
            if (res) {
                if (typeof v === 'string') {
                    if (queries.noRedirect === 'true' || queries.noRedirect === '') {
                        res.send(v);
                    }
                    else {
                        res.redirect(v);
                    }
                }
                else {
                    res.send(v);
                }
            }
            return v;
        }));
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('Cache-Control', 's-max-age=1, stale-while-revalidate'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gh_link_queries_1.GhLinkQueries, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getGhLink", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map