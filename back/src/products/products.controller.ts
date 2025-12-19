import { Controller, Get } from '@nestjs/common';
import { Product } from './product.type';

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
}
