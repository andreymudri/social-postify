import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    try {
      return this.postsService.create(createPostDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  @Get()
  findAll() {
    try {
      return this.postsService.findAll();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.postsService.findOne(+id);
    } catch (error) {
      if (error.message === 'Post not found') {
        throw new HttpException(error.message, 404);
      }
      throw new HttpException(error.message, 500);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    try {
      return this.postsService.update(+id, updatePostDto);
    } catch (error) {
      if (error.message === 'Post not found') {
        throw new HttpException(error.message, 404);
      }
      throw new HttpException(error.message, 500);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.postsService.remove(+id);
    } catch (error) {
      if (error.message === 'Post not found') {
        throw new HttpException(error.message, 404);
      }
      throw new HttpException(error.message, 500);
    }
  }
}
