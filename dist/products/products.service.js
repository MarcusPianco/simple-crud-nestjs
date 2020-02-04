"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const uuid = require("uuid/v1");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    getAllProducts() {
        return this.products;
    }
    createProduct(createProductDto) {
        const { measurement, description, details } = createProductDto;
        const product = {
            id: uuid(),
            measurement,
            description,
            details,
        };
        this.products.push(product);
        return product;
    }
    findProductById(id) {
        return this.products.find(product => product.id === id);
    }
    deleteProductById(id) {
        this.products = this.products.filter(product => product.id !== id);
    }
    updateProductById(id, updateProductDto) {
        var _a, _b, _c;
        const product = this.findProductById(id);
        product.measurement = (_a = updateProductDto.measurement, (_a !== null && _a !== void 0 ? _a : product.measurement));
        product.details = (_b = updateProductDto.details, (_b !== null && _b !== void 0 ? _b : product.details));
        product.description = (_c = updateProductDto.description, (_c !== null && _c !== void 0 ? _c : product.description));
        return product;
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map