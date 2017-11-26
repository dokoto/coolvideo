# CoolVideos

1º Clonar el repo
```
$> git clone https://github.com/dokoto/coolvideo.git
```

2º Levantar el docker
```
$> cd backend
$> docker-compose up server
```

3º Contruir la WebApp
```
$> cd frontend
$> npm install
$> npm run build
```

4º Levantar la WebApp en un servidor 
```
$> npm install -g serve
$> serve -s build
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