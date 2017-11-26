FROM node:8.9.0-alpine
WORKDIR /src/
ENV PORT="host"

ADD package.json ./package.json
RUN npm install
# App
ADD . ./
CMD npm start