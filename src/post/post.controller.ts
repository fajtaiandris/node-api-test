import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { PostArrayResponse } from './dto/post-array-response';
import { PostResponse } from './dto/post-response';
import { CommentResponse } from './dto/comment-response';

@Controller('api/posts')
@ApiTags('Posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiOkResponse({ type: PostArrayResponse })
  findAll(): PostArrayResponse {
    return { data: this.postService.findAll() || [] };
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'number', description: 'The ID of the post.' })
  @ApiOkResponse({ type: PostResponse })
  find(@Param('id', ParseIntPipe) id: number): PostResponse {
    const post = this.postService.find(id);
    if (!post) {
      throw new NotFoundException(`Post not found with id '${id}'`);
    }
    return { data: post };
  }

  @Get(':id/comments')
  @ApiParam({ name: 'id', type: 'number', description: 'The ID of the post.' })
  @ApiOkResponse({ type: CommentResponse })
  getComments(@Param('id', ParseIntPipe) id: number) {
    return { data: this.postService.getCommentsByPostId(id) };
  }
}
