FROM node:lts

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --immutable --immutable-cache --check-cache

COPY . .

EXPOSE 5000
CMD ["yarn", "dev"]