import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Get()
    getAllProducts(): Product[]{
        return this.productsService.getAllProducts();
    }
    @Post()
    createProduct(@Body() createProductDto: CreateProductDto): Product {
        return this.productsService.createProduct(createProductDto);
    }
    @Get('/:id')
    getProductById(@Param('id') id: string){
        return this.productsService.findProductById(id)
    }
    @Delete('/:id')
    deleteproductById(@Param('id') id: string) {
        return this.productsService.deleteProductById(id);
    }
    @Put('/:id')
    updateProductById(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Product{

        return this.productsService.updateProductById(id, updateProductDto)
    }

}
