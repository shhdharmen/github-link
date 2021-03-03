<p align="center">
 <img width="100px" src="./2693.svg" align="center" alt="GitHub Link" />
 <h2 align="center">GitHub Link</h2>
 <p align="center">Get links for your GitHub files based on text, and forget the line numbers!</p>
</p>

## Usage

1. Open the file in browser and copt it's URL, let's call it: `URL_TO_FILE`
2. Find the text to which you want to generate the link, let's call it: `SEARCH`
3. Use both of above and create the link using GitHub Link API:

```
URL/api?ghUrl=<URL_TO_FILE>&q=<SEARCH>
```

You can use it markdown:

```markdown
[link to code line](URL/api?ghUrl=<URL_TO_FILE>&q=<SEARCH>)
```

or HTML:

```
<a href="URL/api?ghUrl=<URL_TO_FILE>&q=<SEARCH>">link to code line</a>
```

By default, API will return a `redirect` response and user will be redirected to matched line on GitHub.

If you don't want redirection, just add `noRedirection`:

```
URL/api?ghUrl=<URL_TO_FILE>&q=<SEARCH>&noRedirection
```

### Supported Query Params

| Query Param | Type                    | Description                                                                   | Required |
| ----------- | ----------------------- | ----------------------------------------------------------------------------- | -------- |
| ghUrl       | `string`                | URL of file hosted on github.com<br>*Validations: `URL` && `Host=github.com`* | Yes      |
| q           | `string`                | Query text, to which link will be generated<br>*Validations: `MinLength=3`*   | Yes      |
| noRedirect  | `'true' | 'false' | ''` | If set, will not redirect to code link                                        | No       |