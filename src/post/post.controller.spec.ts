import { Test } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostArrayResponse } from './dto/post-array-response';
import { PostResponse } from './dto/post-response';
import { dummyPosts } from './dummy-posts';
import { CommentResponse } from './dto/comment-response';

describe('PostController', () => {
  let postController: PostController;
  let postService: PostService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService],
    }).compile();

    postController = moduleRef.get<PostController>(PostController);
    postService = moduleRef.get<PostService>(PostService);
  });

  describe('findAll', () => {
    it('should return an array of posts', () => {
      const expectedResponse: PostArrayResponse = {
        data: dummyPosts,
      };
      jest.spyOn(postService, 'findAll').mockReturnValue(expectedResponse.data);

      const result = postController.findAll();

      expect(postService.findAll).toHaveBeenCalled();
      expect(result).toEqual(expectedResponse);
    });

    it('should return an empty array if no posts are found', () => {
      const expectedResponse: PostArrayResponse = {
        data: [],
      };
      jest.spyOn(postService, 'findAll').mockReturnValue([]);

      const result = postController.findAll();

      expect(postService.findAll).toHaveBeenCalled();
      expect(result).toEqual(expectedResponse);
    });
  });

  describe('find', () => {
    it('should return the post with the given ID', () => {
      const postId = 1;
      const expectedResponse: PostResponse = {
        data: dummyPosts[0],
      };
      jest.spyOn(postService, 'find').mockReturnValue(expectedResponse.data);

      const result = postController.find(postId);

      expect(postService.find).toHaveBeenCalledWith(postId);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw NotFoundException if post with given ID is not found', () => {
      const postId = 999;
      jest.spyOn(postService, 'find').mockReturnValue(undefined);

      expect(() => postController.find(postId)).toThrowError(NotFoundException);
      expect(postService.find).toHaveBeenCalledWith(postId);
    });
  });

  describe('getComments', () => {
    it('should return an array of comments for the post with the given ID', () => {
      const postId = 1;
      const expectedResponse: CommentResponse = {
        data: dummyPosts[0].comments,
      };
      jest.spyOn(postService, 'find').mockReturnValue(dummyPosts[0]);

      const result = postController.getComments(postId);

      expect(postService.find).toHaveBeenCalledWith(postId);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw NotFoundException if post with given ID is not found', () => {
      const postId = 999;
      jest.spyOn(postService, 'find').mockReturnValue(undefined);

      expect(() => postController.getComments(postId)).toThrowError(
        NotFoundException,
      );
      expect(postService.find).toHaveBeenCalledWith(postId);
    });
  });
});
