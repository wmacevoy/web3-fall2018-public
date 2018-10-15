# VBox

Don't install nodejs on 16.04 (18.04 is ok) because node is too old.

```bash
sudo apt install -y curl
```

For the LTS version use:
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
sudo apt-get install -y build-essential git nodejs
```

For yarn
```bash
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
     echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install -y yarn
```

```bash
sudo npm install -g @vue/cli
sudo npm install -g @vue/cli-service-global
```

Create template with

vx1/App.vue:

```html
<template>
  <h1>Hello!</h1>
</template>
```

run dev server with (in vx1 directory)

```bash
vue serve
```

open localhost:8080 to see Hello!

make a snapshot

```bash
sudo apt-get install -y mongodb
sudo npm install -g mongo-express
```

Set admin password:

```bash
mongo
```
In mongo shell:
```javascript
use admin
db.createUser(
  {
    user: "admin",
    pwd: "justasbad",
    roles: ["root"]
  }
)
```
ctrl-d to exit shell.  `service mongodb restart` to restart.
```bash
mongo -u '<adminuser>' -p '<adminpass>' --authenticationDatabase 'admin'
```
cd /usr

