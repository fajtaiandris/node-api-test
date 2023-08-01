import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { PostArrayResponse } from './dto/post-array-response';

@Controller('api/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll(): PostArrayResponse {
    return { data: this.postService.findAll() };
  }
}
