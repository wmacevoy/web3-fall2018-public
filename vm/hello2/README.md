# hello2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


API message examples:
```bash
curl -i -H "Accept: application/json" localhost:3000/message
curl -i -X POST -H "Content-Type: application/json" -d '{"lang": "it", "message":"ciao" }' http://localhost:3000/message
```

Config best practices:

https://codingsans.com/blog/node-config-best-practices
