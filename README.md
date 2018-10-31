# vue-demo
Vue.js demo app which creates the same web page as vue-cli demo app from https://github.com/BojanKomazec/the-vue-handbook-demo-cli-example.

This one is built manually from scratch and uses Rollup.js to create the output bundle.

`type=module` is used in `<script>` tag in `index.html` in order to prevent the following error (in `index.html:7`):
`GET http://127.0.0.1:5501/src/views/bundle.js net::ERR_ABORTED 404 (Not Found)`

Building the app:
```
> npm install
> npm run build
```

Output:
```
dist/bundle.js
dist/index.html
```