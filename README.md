# Mateusz Lewandowski - Home Page

## Development

### `npm start`

## Deployment

### `npm run deploy`

Requirements:
- `gh-pages` library is installed
- github repository is configured to deploy:
    * open `github.com > REPOSITORY > settings > pages`
    * set `Source` to `Deploy from branch`
    * set `Branch` to `gh-pages` / `/(root)`
    * save changes

Steps performed by `gh-pages` library:
1. Build application `npm run build`
2. Publish `/build` on `gh-pages` branch
3. After push `gh-pages` branch, github (if configured) will apply changes on website
