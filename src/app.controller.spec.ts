import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [HttpModule],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return url to line', (done) => {
      const obs = appController.getGhLink({
        ghUrl:
          'https://github.com/ngneat/hot-toast/blob/master/projects/ngneat/hot-toast/src/lib/hot-toast.model.ts',
        q: 'ToastTheme',
      });
      obs.subscribe((data) => {
        expect(data).toEqual(
          'https://github.com/ngneat/hot-toast/blob/master/projects/ngneat/hot-toast/src/lib/hot-toast.model.ts#L24',
        );
        done();
      });
    });
  });
});
