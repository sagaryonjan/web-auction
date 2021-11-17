FROM node:dubnium-alpine

WORKDIR /app

COPY . .

ENV NODE_OPTIONS=--max-old-space-size=4096

RUN yarn install

EXPOSE 8002

#CMD ["node", "index.js"]


