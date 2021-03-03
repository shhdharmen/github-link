import { IsOptional, IsString, IsUrl, MinLength } from 'class-validator';

export class GhLinkQueries {
  /**
   * URL of file hosted on github.com
   *
   * @type {string}
   * @memberof GhLinkQueries
   */
  @IsUrl({ protocols: ['https'], host_whitelist: ['github.com'] })
  ghUrl: string;

  /**
   * Query text, to which link will be generated
   * Min. length required is 3
   *
   * @type {string}
   * @memberof GhLinkQueries
   */
  @IsString()
  @MinLength(3)
  q: string;

  /**
   * If set, will not redirect to code link
   *
   * @type {('true' | 'false' | '')}
   * @memberof GhLinkQueries
   */
  @IsOptional()
  noRedirect?: 'true' | 'false' | '';
}
