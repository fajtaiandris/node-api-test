import { Injectable } from '@nestjs/common';
import { Post } from './dto/post';
import { dummyPosts } from './dummy-posts';

@Injectable()
export class PostService {
  findAll(): Post[] {
    return dummyPosts;
  }
}
