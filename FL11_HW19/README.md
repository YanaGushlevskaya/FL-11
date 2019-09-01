# Webpack Boilerplate ES6/Sass with build-in option to change preprocessor (less/stylus)
This <strong>Webpack Boilerplate</strong> comes with 2 builds:

```
npm install
or
yarn
```
-> to start <br><br>

```
yarn serve
```
-> starts dev server on <code>localhost:8080</code> with livereload, sourcemap<br><br>

```
yarn build
```
-> creates prod files to <code>/dist</code> with:

  1. compiles sass/stylus/less to css <br>
  2. autoprefixer for vendor prefixes (browser compability) <br>
  3. compiles ES6+ to ES5 <br>
  4. minifying for css/js <br>
  5. uglyfing js code <br>
  6. hash css and js file (file versioning for browser caching -> cache busting) <br>
