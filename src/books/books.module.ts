import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [ConfigModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
