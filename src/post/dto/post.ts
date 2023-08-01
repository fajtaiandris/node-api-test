import { ApiProperty } from '@nestjs/swagger';

/**
 * Represents a blog post.
 */
export class Post {
  /**
   * The unique identifier for the post.
   */
  @ApiProperty()
  id: number;

  /**
   * The title of the post.
   */
  @ApiProperty({
    description: 'The title of the blog post.',
    type: 'string',
    example: 'Exploring the World of Soccer',
  })
  title: string;

  /**
   * The headline of the post.
   */
  @ApiProperty({
    description: 'A brief headline or summary for the blog post.',
    type: 'string',
    example: 'The excitement of soccer matches',
  })
  headline: string;

  /**
   * The main content body of the post.
   */
  @ApiProperty({
    description: 'The main content body of the blog post.',
    type: 'string',
    example:
      'Soccer, also known as football in many countries, is a popular sport that brings people together...',
  })
  body: string;

  /**
   * The date and time when the post was created.
   */
  @ApiProperty({
    description: 'The date and time when the blog post was created.',
    type: 'string',
    format: 'date-time',
    example: '2023-02-11T12:34:56Z',
  })
  created_at: Date;

  /**
   * An array of tags associated with the post.
   */
  @ApiProperty({
    description: 'An array of tags associated with the blog post.',
    type: 'array',
    items: {
      type: 'string',
      example: 'Sports',
    },
  })
  tags: string[];
}
