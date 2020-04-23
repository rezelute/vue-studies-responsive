# Studies Sano Genetics

## A live demo hosted on Zeit Now


## Why I chose to use a list instead of a table for the studies?
The rationale behind my thinking was that a table is usually used to display/compare tabular data. In this case, we only have a title, status and a toggle button so semantically it maybe better to use another element. I chose the UL tag as it plays 
well with screen readers but a DIV could have also worked with aria roles: table, rowgroup, row, columnheader and cell.
If I wanted to go down the table element route, I would have used the vue-mq plugin to assist with media queries in VueJS to help display/hide components.

## Mobile first approach
The styling is done with a mobile first approach in mind.

## Tested on
Latest Edge, Chrome, Firefox, Firefox mobile.

## What did I use to test accessiblity?
Firefox Accessiblity in Firefox Developer Tools and Chrome Audit.
Problems reported appear to be from colour/backgrounds.

## Eslint file included

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
