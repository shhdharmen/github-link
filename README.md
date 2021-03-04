<p align="center">
 <img width="100px" src="./github-link.svg" align="center" alt="GitHub Link" />
 <h2 align="center">GitHub Link</h2>
 <p align="center">Get links for your GitHub files based on text, and forget the line numbers!</p>
</p>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Why GitHub Link?

### In Short

We usually create link-to-code to point our readers, users or developers to the exact code. But such links are created based on line-number and if you're updating the file regularly, those links will not point to correct line or you will need to keep updating your links. GitHub Link helps you to get the right link-to-code, based on text you give, so that it always points to contextually right definition. Jump to [usage](#usage)

### In Long

We generally create [permanent link](https://docs.github.com/en/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet) to code snippet. As they are for specific commit, they work great when referred in issues/PRs.

But what if you want to give such links in your README or such files? Like you have already defined a coded file with proper comments and you want to give link to same in README, so that you can keep your README short and concise, and have links to all the extra definitions in it. Because you will always want up-to-date reference in README, permanent links will not work, as it shows file from specific commit.

You may use "Copy Link" feature, that links to the latest version of file, but then it may point to wrong definition, because you might have added/removed more lines of code in the file.

This is where GitHub Link comes into the picture. It gives you the link to code line, based on the text, so that it always points to contextually right definition.

#### Example

1. You have all of your types defined in `hot-toast.model.ts`
2. It looks something like below:

```typescript
export type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'warning';
```

3. You are create a `READEME.md` and add a link by creating [permanent link](https://docs.github.com/en/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet)
4. It works, great!
5. Now, you added a feature and you introduced a new type in `hot-toast.model.ts`

```diff
+ export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'warning';
```

6. As the line for previous type is changed, the link on your `README` will point to `export type ToastPosition...`, instead of `export type ToastType...`.
7. So, to resolve this problem, you can create github-link
8. Let's take this URL for example: `https://github.com/ngneat/hot-toast/blob/master/projects/ngneat/hot-toast/src/lib/hot-toast.model.ts`
9. Now the text to which we want to generate link is: `export type ToastType`
10. Considering points 8 & 9, below will be your link:

```
https://github-link.vercel.app/api?ghUrl=https://github.com/ngneat/hot-toast/blob/master/projects/ngneat/hot-toast/src/lib/hot-toast.model.ts&q=export type ToastType
```

11. Above link will find first occurance of `export type ToastType` in given URL, get it's line and will redirect there!

## Usage

1. Open the file in browser and copy it's URL, let's call it: `URL_TO_FILE`
2. Find the text to which you want to generate the link, let's call it: `SEARCH`
3. Use both of above and create the link using GitHub Link API:

```
https://github-link.vercel.app/api?ghUrl=<URL_TO_FILE>&q=<SEARCH>
```

You can use it markdown:

```markdown
[link to code line](https://github-link.vercel.app/api?ghUrl=<URL_TO_FILE>&q=<SEARCH>)
```

or HTML:

```
<a href="https://github-link.vercel.app/api?ghUrl=<URL_TO_FILE>&q=<SEARCH>">link to code line</a>
```

By default, API will return a `redirect` response and user will be redirected to matched line on GitHub.

If you don't want redirection, just add `noRedirect`:

```
https://github-link.vercel.app/api?ghUrl=<URL_TO_FILE>&q=<SEARCH>&noRedirect
```

### Supported Query Params

| Query Param | Type                      | Description                                                                   | Required |
| ----------- | ------------------------- | ----------------------------------------------------------------------------- | -------- |
| ghUrl       | `string`                  | URL of file hosted on github.com<br>*Validations: `URL` && `Host=github.com`* | Yes      |
| q           | `string`                  | Query text, to which link will be generated<br>*Validations: `MinLength=3`*   | Yes      |
| noRedirect  | `'true' \| 'false' \| ''` | If set, will not redirect to code link                                        | No       |

## Deploy Your Own Instance

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fshhdharmen%2Fgithub-link)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/shhdharmen"><img src="https://avatars.githubusercontent.com/u/6831283?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dharmen Shah</b></sub></a><br /><a href="https://github.com/shhdharmen/github-link/commits?author=shhdharmen" title="Code">💻</a> <a href="#content-shhdharmen" title="Content">🖋</a> <a href="https://github.com/shhdharmen/github-link/commits?author=shhdharmen" title="Documentation">📖</a> <a href="#example-shhdharmen" title="Examples">💡</a> <a href="#ideas-shhdharmen" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-shhdharmen" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-shhdharmen" title="Maintenance">🚧</a> <a href="#research-shhdharmen" title="Research">🔬</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Credits 🙌

- This is built on top of [nestjs](https://nestjs.com/) and deployed freely using [vercel](https://vercel.com/), thanks to their teams!
- Logo is inspired from [file-symlink-file](https://octicons-primer.vercel.app/octicons/file-symlink-file-24) of [Octicons](https://primer.style/octicons/).
