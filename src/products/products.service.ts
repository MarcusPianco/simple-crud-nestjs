import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import * as uuid from 'uuid/v1';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@Injectable()
export class ProductsService {
    private products: Product[] = [];

    getAllProducts(): Product[] {
        return this.products;
    }

    createProduct(createProductDto: CreateProductDto) {
        const {measurement, description, details} = createProductDto;
        const product: Product = {
            id: uuid(),
            measurement,
            description,
            details,
        };

        this.products.push(product);
        return product;

    }
    findProductById(id: string) {
        return this.products.find(product => product.id === id);

    }

    deleteProductById(id: string): void {
        this.products = this.products.filter(product => product.id !== id);
    }

    updateProductById(id: string, updateProductDto: UpdateProductDto  ): Product {

        const product = this.findProductById(id);
        product.measurement = updateProductDto.measurement ?? product.measurement;
        product.details = updateProductDto.details ?? product.details;
        product.description =  updateProductDto.description ?? product.description;
        return product;

    }
}
