import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosError } from 'axios';
import { GhLinkResult } from './types';
export declare class AppService {
    private httpService;
    constructor(httpService: HttpService);
    getGhLink(ghUrl: string, q: string): Observable<GhLinkResult<AxiosError<any>>>;
}
