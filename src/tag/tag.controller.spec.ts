import { Test } from '@nestjs/testing';
import { TagController } from './tag.controller';
import { PostService } from '../post/post.service';
import { PostArrayResponse } from '../post/dto/post-array-response';
import { dummyPosts } from '../post/dummy-posts';

describe('TagController', () => {
  let tagController: TagController;
  let postService: PostService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TagController],
      providers: [PostService],
    }).compile();

    tagController = moduleRef.get<TagController>(TagController);
    postService = moduleRef.get<PostService>(PostService);
  });

  describe('findByTag', () => {
    it('should return an array of posts with the given tag', () => {
      const tagName = 'Sports';
      const expectedResponse: PostArrayResponse = {
        data: [dummyPosts[0]],
      };
      jest
        .spyOn(postService, 'findByTag')
        .mockReturnValue(expectedResponse.data);

      const result = tagController.findByTag(tagName);

      expect(postService.findByTag).toHaveBeenCalledWith(tagName);
      expect(result).toEqual(expectedResponse);
    });

    it('should return an empty array if no posts with the given tag are found', () => {
      const tagName = 'NonExistentTag';
      const expectedResponse: PostArrayResponse = {
        data: [],
      };
      jest.spyOn(postService, 'findByTag').mockReturnValue([]);

      const result = tagController.findByTag(tagName);

      expect(postService.findByTag).toHaveBeenCalledWith(tagName);
      expect(result).toEqual(expectedResponse);
    });
  });
});
