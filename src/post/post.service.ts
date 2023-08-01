import { Injectable } from '@nestjs/common';
import { Post } from './dto/post';
import { Comment } from './dto/comment';
import { dummyPosts } from './dummy-posts';

@Injectable()
export class PostService {
  findAll(): Post[] {
    return dummyPosts;
  }

  find(id: number): Post | undefined {
    return dummyPosts.find((post) => post.id === id);
  }

  getCommentsByPostId(id: number): Comment[] {
    const post = this.find(id);
    if (!post) {
      return [];
    }
    return post.comments;
  }
}
