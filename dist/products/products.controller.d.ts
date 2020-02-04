import { ProductsService } from './products.service';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Product[];
    createProduct(createProductDto: CreateProductDto): Product;
    getProductById(id: string): Product;
    deleteproductById(id: string): void;
    updateProductById(id: string, updateProductDto: UpdateProductDto): Product;
}
