import { ApiProperty } from '@nestjs/swagger';
import { Comment } from './comment';

/**
 * Represents a response containing an array of comments.
 */
export class CommentResponse {
  /**
   * An array of comments.
   */
  @ApiProperty({
    description: 'An array of comments.',
    type: [Comment],
  })
  data: Comment[];
}
