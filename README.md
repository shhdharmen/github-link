<p align="center">
 <img width="100px" src="./github-link.svg" align="center" alt="GitHub Link" />
 <h2 align="center">GitHub Link</h2>
 <p align="center">Get links for your GitHub files based on text, and forget the line numbers!</p>
</p>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
## Why GitHub Link?

We generally create [permanent link](https://docs.github.com/en/github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet) to code snippet. As they are for specific commit, they work great when referred in issues/PRs.

But what if you want to give such links in your README or such files? Like you have already defined a coded file with proper comments and you want to give link to same in README, so that you can keep your README short and concise, and have links to all the extra definitions in it. Because you will always want up-to-date reference in README, permanent links will not work, as it shows file from specific commit.

You may use "Copy Link" feature, that links to the latest version of file, but then it may point to wrong definition, because you might have added/removed more lines of code in the file.

This is where GitHub Link comes into the picture. It gives you the link to code line, based on the text, so that it always points to contextually right definition.

## Usage

1. Open the file in browser and copt it's URL, let's call it: `URL_TO_FILE`
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

If you don't want redirection, just add `noRedirection`:

```
https://github-link.vercel.app/api?ghUrl=<URL_TO_FILE>&q=<SEARCH>&noRedirection
```

### Supported Query Params

| Query Param | Type                    | Description                                                                   | Required |
| ----------- | ----------------------- | ----------------------------------------------------------------------------- | -------- |
| ghUrl       | `string`                | URL of file hosted on github.com<br>*Validations: `URL` && `Host=github.com`* | Yes      |
| q           | `string`                | Query text, to which link will be generated<br>*Validations: `MinLength=3`*   | Yes      |
| noRedirect  | `'true' | 'false' | ''` | If set, will not redirect to code link                                        | No       |

## Credits

Logo inspired from [file-symlink-file](https://octicons-primer.vercel.app/octicons/file-symlink-file-24) of [Octicons](https://primer.style/octicons/).

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