import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { PostArrayResponse } from 'src/post/dto/post-array-response';
import { PostService } from 'src/post/post.service';

@Controller('api/tags')
export class TagController {
  constructor(private readonly postService: PostService) {}

  @Get(':name')
  @ApiParam({
    name: 'name',
    type: 'string',
    description: 'The tag of the posts.',
  })
  @ApiOkResponse({ type: PostArrayResponse })
  findByTag(@Param('name') name: string): PostArrayResponse {
    return { data: this.postService.findByTag(name) || [] };
  }
}
