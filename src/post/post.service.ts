import { Injectable } from '@nestjs/common';
import { Post } from './post.interface';
import { dummyPosts } from './dummy-posts';

@Injectable()
export class PostService {
  findAll(): Post[] {
    return dummyPosts;
  }
}
