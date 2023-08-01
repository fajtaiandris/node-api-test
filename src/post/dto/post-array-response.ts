import { ApiProperty } from '@nestjs/swagger';
import { Post } from './post';

/**
 * Represents a response containing an array of blog posts.
 */
export class PostArrayResponse {
  /**
   * An array of blog posts.
   */
  @ApiProperty({
    description: 'An array of blog posts.',
    type: [Post],
  })
  data: Post[];
}
