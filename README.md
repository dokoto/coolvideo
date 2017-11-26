# Digital Origin Test

Thanks for taking the time to do our frontend coding test!

**Rules:**

* There is no time limit.
* We provide a base setup for the frontend. This setup is based in the famous create-react-app. If you don't feel comfortable using it, just feel free to use whatever technology you want.
* (Not mandatory) It would be great if you use our DigitalOrigin's CSS Framework a.k.a do-css-framework in your test. We provide a copy the styles under `./frontend/public/css/do-css-framework.css`. Anyway feel free use another CSS framework or build plain SCSS / CSS if you don't want to use it.
* The final test should build properly and we should be able to see something in our browsers (provide instructions if needed)

**Explanation:**

Our CEO is looking for new business opportunities. He is a big fan of movies and TV Shows (who is not?). He asked us to make an application to manage Movies and TV Shows, store favourites, share them, etc,

The purpose of this test is to make an MVP about this new idea.

One of our interns started working on the project (Ver+Tarde) last summer. But the internship ended and he left the company.

As far as we know, our he did the whole Backend part and only started doing some Frontend. He did not do too much. So, if you want you can replace it for the technology of your preference.

**ToDo**

* Dashboard Page
* Show discovery movies
* Add movies to favourites
* See user favourites
* Some unit testing or e2e testing will be great!

## Running instructions

### Frontend

* From `frontend` folder
* Install dependencies ```npm install```
* Copy frontend.env in dot env into frontend folder ```cp ../frontend.env frontend/.env```
* Start application ```npm start```

### Backend with Docker

There is a docker-compose configured to get the server up on port 3001

* From the base test folder
* [Install docker](https://docs.docker.com/engine/installation/) be sure
support docker compose version 3
*  Run ```docker-compose up server```

### Backend without Docker

* Requirement: node v8.9.0
* From the `backend` folder
* Install mongodb
* Install dependencies ```npm install```
* Copy backend.env in dot env at folder ```cp ../backend.env backend/.env```
* Start application ```npm start```

## API Endpoints

The API will be served under http://localhost:3001

### Extended API Documentation

You can find API documentation made with Swagger in *backend/docs* under filename *swagger.json*.

To see the documentation you can do either:

- Run this command: `docker-compose up doc`. After that you will be able to see the documentation under the URL: http://localhost:3002

- Or paste *swagger.json* contents in: [swagger editor](https://editor.swagger.io/)

#### A summary for API Documentation

##### Public endpoints

  Can be accessed with no authentication.

  * **POST** */user* -> Create a new user
  * **POST** */login* -> Try to login in the application returns a JWT token

##### Protected endpoints

  Each request should have an HTTP header `Authorization BEARER {JWT_TOKEN}` otherwise the API server will respond with 401 Unauthorized HTTP Code.

* **GET** */movies* -> Get a list of the top movies
* **GET** */movies/{movieId}* -> Get info about a specific movie
* **GET** */movies/configuration* -> Meta information about image paths and size
* **GET** */user/favorites* -> Get current user favorite movies
* **POST** */user/favorites* -> Add a new movie to favorites

#### Get a movie poster or image

* Get base URL and available size from */movies/configuration* endpoint
* The final URL will be `{base_url}{poster_size}{url_in_movie}`. For more information (https://developers.themoviedb.org/3/getting-started/images)

## Architecture

### Backend

* NodeJS v8.9.0
* MongoDB

### Frontend

*WIP: Is still in construction. You can use or replace any of the following*

* React application created with create-react-app
* Configured do-css-framework to work with the application
* Configured *react-router*
* Simple Login page created (unfinished) (http://localhost:3000/login)
* SignUp page page created (unfinished) (http://localhost:3000/users/sign_up)

### DO CSS Framework

This is our internal CSS framework you can find
the styleguide [here](https://digitalorigin.github.io/pmt-mbo-fe/)
