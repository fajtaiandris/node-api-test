import { ApiProperty } from '@nestjs/swagger';

/**
 * Represents a comment.
 */
export class Comment {
  /**
   * The unique identifier for the comment.
   */
  @ApiProperty({ type: 'number' })
  id: number;

  /**
   * The date and time when the comment was created.
   */
  @ApiProperty({
    description: 'The date and time when the comment was created.',
    type: 'string',
    format: 'date-time',
    example: '2023-02-11T12:34:56Z',
  })
  created_at: Date;

  /**
   * The content body of the comment.
   */
  @ApiProperty({
    description: 'The content body of the comment.',
    type: 'string',
    example: 'That is really nice to hear!',
  })
  body: string;

  /**
   * The name of the author.
   */
  @ApiProperty({
    description: 'The name of the author.',
    type: 'string',
    example: 'John Doe',
  })
  author: string;
}
