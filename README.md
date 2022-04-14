# Filmoteka Project

## Single Page Movie Library


## Technologies
Project based on Parcel build tool
- Parcel 
- HTML5
- Sass
- Vanilla JS, ES6


## NPM packages
Most of featers was created from scratch, but some in some case needed some libs.
- tui_pagination
- firebase
- lodash
- axios

## Structure
Project splited into 3 main directories: html, css, js. Each direction splited in their logic folders/files
- index.html - entry point of project
- sass
  - index.scss - main scss file wich imports in project
  - utils - files with common stuff like variables or normalizer
  - components - each component in markup has own file .scss
- components - some html particles, main components renders with javascript
- assets - images and icons
- js 
  - index.js - entry files with some imports and main fetch function, that's need for correct render some components
  - store - main object in project, that store data as like refs to html elements, query for search and etc 
  - handlers - looks like middleware functions to handle clicks or other interface featers, usually calls render function in the end
  - pages - because it's SPA - needs initate pages 
  - render - function that's insert our template html into the page, calls utils functions
  - templates - arrow functions that's just return markup for render
  - services - API, auth and Firebase fetch functions
  - utils - helping functions, filters, mappers and other

## Installation
You need to clone or fork project then install all dependencies and start project
```
git clone 
```

```
npm install
```

```
npm run dev
```

Project will start at localhost:1234