# hello-world

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```

### My notes

To build the application

(not in emacs - the tty will not display menus properly)
```bash
cd ..
. context
vue create hello-world
cd hello-world
/bin/rm -rf .git
git add .gitignore README.md babel.config.js package.json public/favicon.ico public/index.html src/App.vue src/assets/logo.png src/components/HelloWorld.vue src/main.js yarn.lock
git commit -m "init"
vue add router
yarn serve
```




