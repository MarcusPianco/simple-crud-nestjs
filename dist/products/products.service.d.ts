import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private products;
    getAllProducts(): Product[];
    createProduct(createProductDto: CreateProductDto): Product;
    findProductById(id: string): Product;
    deleteProductById(id: string): void;
    updateProductById(id: string, updateProductDto: UpdateProductDto): Product;
}
