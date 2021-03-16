FROM node:15

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./build .
COPY ./package.json .
COPY ./swagger.yaml .

RUN npm install --production

ENTRYPOINT [ "node", "." ]
