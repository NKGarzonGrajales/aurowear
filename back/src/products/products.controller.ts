import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import type { Product } from './product.type';

@Controller('products')
export class ProductController {
  private products: Product[] = [
    {
      id: 1,
      name: 'Aurowear Hoodie',
      description: 'Premium hoodie made with organic cotton.',
      price: 120,
      stock: 10,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'hoodies',
      isActive: true,
    },

    {
      id: 2,
      name: 'Aurowear T-Shirt',
      description: 'Minimalist t-shirt with a modern cut.',
      price: 60,
      stock: 25,
      imageUrl: 'https://via.placeholder.com/300',
      category: 'tshirts',
      isActive: true,
    },
  ];

  @Get()
  findAll(): Product[] {
    return this.products;
  }
  @Get(':id')
  findOne(@Param('id') id: string): Product {
    const productId = Number(id);

    const product = this.products.find((p) => p.id === productId);

    if (!product) {
      throw new NotFoundException(`Product with id ${productId} not found`);
    }

    return product;
  }
}
