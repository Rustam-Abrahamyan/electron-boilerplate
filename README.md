# Electron Boilerplate

#### Boilerplate for desktop apps using:
- [Electron](https://electronjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Webpack](https://webpack.js.org/)

## Before anything
Install packages.
Open a terminal in the project root folder and run:
```cmd
$ npm install
```

## During development

### Start the app in **development** mode (**with** hot reload).
Run:
```cmd
$ npm start
```
It will launch webpack dev server and electron [concurrently](https://www.npmjs.com/package/concurrently).

### Start app in **production** mode (**without** hot reload).
Run:
```cmd
$ npm run start:prod
```

## Deploy
Just run:
```cmd
$ npm run pack
```
and the output will available in the ```./pack``` folder.

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).