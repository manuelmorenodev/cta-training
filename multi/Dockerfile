FROM node:16

WORKDIR /usr/src/app
ADD package.json /usr/src/app
ADD package-lock.json /usr/src/app
RUN npm install

ENTRYPOINT [ "npm", "start" ]
