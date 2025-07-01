import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll(sort: 'asc' | 'desc' = 'asc'): string {
    return `This action returns all books sorted in ${sort} order`;
  }

  create(createBookDto: any): string {
    return `This action adds a new book with data: ${JSON.stringify(createBookDto)}`;
  }

  findOne(id: string): string {
    return `This action returns a book with ID: ${id}`;
  }
}
