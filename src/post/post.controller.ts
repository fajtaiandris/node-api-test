import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { PostArrayResponse } from './dto/post-array-response';

@Controller('api/posts')
@ApiTags('Posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiOkResponse({ type: PostArrayResponse })
  findAll(): PostArrayResponse {
    return { data: this.postService.findAll() };
  }
}
