import { HttpService, Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AxiosResponse, AxiosError } from 'axios';
import { GhLinkResult } from './types';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  getGhLink(
    ghUrl: string,
    q: string,
  ): Observable<GhLinkResult<AxiosError<any>>> {
    return this.httpService.get<string>(ghUrl + '?raw=true').pipe(
      map((res: AxiosResponse) => {
        const text = res.data;
        const searchIndex = text.indexOf(q);
        const line = text.substr(0, searchIndex).split(/\r\n|\r|\n/).length;

        const lineUrl = ghUrl + '#L' + line;
        return lineUrl;
      }),
      catchError((err: AxiosError) => {
        return of(err);
      }),
    );
  }
}
