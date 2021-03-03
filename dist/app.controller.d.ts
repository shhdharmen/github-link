import { Response } from 'express';
import { AppService } from './app.service';
import { GhLinkQueries } from './gh-link-queries';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getGhLink(queries: GhLinkQueries, res?: Response): import("rxjs").Observable<import("./types").GhLinkResult<import("axios").AxiosError<any>>>;
}
