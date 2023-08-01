import { PostService } from './post.service';
import { dummyPosts } from './dummy-posts';
// Normally, I would mock the ORM but I'll just use the dummy data here

describe('PostService', () => {
  let postService: PostService;

  beforeEach(() => {
    postService = new PostService();
  });

  describe('findAll', () => {
    it('should return an array of posts', () => {
      const result = postService.findAll();
      expect(result).toEqual(dummyPosts);
    });
  });

  describe('find', () => {
    it('should return the post with the given ID', () => {
      const postId = 2;
      const result = postService.find(postId);
      expect(result).toEqual(dummyPosts[1]);
    });

    it('should return undefined if post with given ID is not found', () => {
      const postId = 999;
      const result = postService.find(postId);
      expect(result).toBeUndefined();
    });
  });

  describe('findByTag', () => {
    it('should return an array of posts with the given tag', () => {
      const tag = 'Sports';
      const result = postService.findByTag(tag);
      expect(result).toEqual([dummyPosts[0]]);
    });

    it('should return an empty array if no posts with the given tag are found', () => {
      const tag = 'NonExistentTag';
      const result = postService.findByTag(tag);
      expect(result).toEqual([]);
    });
  });
});
