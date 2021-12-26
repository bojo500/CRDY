import { Test, TestingModule } from '@nestjs/testing';
import { BlogOneController } from './blog-one.controller';
import { BlogOneService } from './blog-one.service';

describe('BlogOneController', () => {
  let controller: BlogOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogOneController],
      providers: [BlogOneService],
    }).compile();

    controller = module.get<BlogOneController>(BlogOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
