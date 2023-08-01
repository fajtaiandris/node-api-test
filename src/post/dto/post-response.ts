import { ApiProperty } from '@nestjs/swagger';
import { Post } from './post';

/**
 * Represents a response containing a single blog post.
 */
export class PostResponse {
  /**
   * A blog post.
   */
  @ApiProperty({
    description: 'A blog posts.',
    type: Post,
  })
  data: Post;
}
