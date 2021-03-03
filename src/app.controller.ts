import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';
import { GhLinkQueries } from './gh-link-queries';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGhLink(@Query() queries: GhLinkQueries, @Res() res?: Response) {
    return this.appService.getGhLink(queries.ghUrl, queries.q).pipe(
      map((v) => {
        if (res) {
          if (typeof v === 'string') {
            if (queries.noRedirect === 'true' || queries.noRedirect === '') {
              res.send(v);
            } else {
              res.redirect(v);
            }
          } else {
            res.send(v);
          }
        }
        return v;
      }),
    );
  }
}
