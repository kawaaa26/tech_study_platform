FROM node:10.17.0-alpine

ENV LANG C.UTF-8

RUN mkdir -p /var/app

WORKDIR /var/app

COPY . .
RUN yarn

CMD ["yarn", "dev"]
