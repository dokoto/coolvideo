# CoolVideos

1º Clonar el repo
```
$> git clone https://github.com/dokoto/coolvideo.git
```

2º Levantar el docker
```
$> cd backend
$> docker-compose up doc
```

3º Contruir la WebApp
```
$> cd frontend
$> npm run build
```

4º Levantar la WebApp en un servidor 
```
$> npm i -g browser-sync
$> cd frontend/build
$> browser-sync start --server --files 'css/*.css'
```

5º Levantar la WebApp para test
```
$> cd frontend
$> npm start
```

6º Ejecutar BDDs
```
$> cd frontend
$> npm run test-bdd
```