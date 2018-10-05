# VBox

Don't install nodejs on 16.04 (18.04 is ok) because node is too old.

```bash
sudo apt install -y curl
```

For the LTS version use:
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -
```

```bash
sudo npm install -g @vue/cli
npm install -g @vue/cli-service-global
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




