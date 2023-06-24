FROM node:18.14-alpine

WORKDIR /frontend

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build 

CMD ["yarn", "start"]


