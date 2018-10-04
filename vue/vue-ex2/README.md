# Vue ex2

## Bootstrap

Create bootstrap docker with just the vue cli to initialize project.  This should be done in the client directory because of how the home directory is mounted.
The last step is interactive: Project client, name: Warren, Use yarn. Others default.

```bash
docker-compose -f docker-compose-bootstrap.yml build
mkdir client
cd client
docker run --rm -it -v "$(pwd):/home" vue-ex2_vue-bootstrap:latest vue init webcpack .
```

## Production client server

This builds the project and then points an nginx server to the compiled project.  Open `https://localhost:8080` to see.

```bash
cp ../Dockerfile-client ./Dockerfile
docker-compose build
docker-compose up
```
These are files to track in your git repository

```bash
git add Dockerfile README.md build/*.js config/*.js index.html package*.json src/App.vue src/assets/logo.png src/components/HelloWorld.vue src/main.js src/router/index.js static/.gitkeep test/e2e/*.js test/unit/.eslintrc test/unit/*.js test/unit/specs/*.js
```

