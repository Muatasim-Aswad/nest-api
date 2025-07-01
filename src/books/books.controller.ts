import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'asc'): string {
    return this.booksService.findAll(sort);
  }

  @Post()
  create(@Body() createBookDto: any): string {
    return this.booksService.create(createBookDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): string {
    return this.booksService.findOne(id);
  }
}
