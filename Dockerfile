FROM node:16

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]