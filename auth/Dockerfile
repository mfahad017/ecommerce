FROM node:18.14.0-alpine3.17 as builder

WORKDIR /usr/app

COPY package.json .
RUN npm i --legacy-peer-deps
COPY . . 

RUN npm run build


FROM node:18.14.0-alpine3.17 as prod

WORKDIR /usr/app

COPY --from=builder /usr/app/dist .
COPY  package.json .

RUN npm install --legacy-peer-deps

ENV NODE_ENV=prod

CMD [ "node", "main.js" ]