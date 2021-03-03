import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get(
        '/?ghUrl=https://github.com/ngneat/hot-toast/blob/master/projects/ngneat/hot-toast/src/lib/hot-toast.model.ts&q=ToastTheme',
      )
      .expect(302);
  });

  afterAll(async () => {
    await app.close();
  });
});
