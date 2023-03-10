FROM node:16-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install

COPY . /app/

EXPOSE 3000

CMD ["yarn", "run", "dev"]
