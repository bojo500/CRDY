import { Test, TestingModule } from '@nestjs/testing';
import { BlogOneService } from './blog-one.service';

describe('BlogOneService', () => {
  let service: BlogOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogOneService],
    }).compile();

    service = module.get<BlogOneService>(BlogOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
