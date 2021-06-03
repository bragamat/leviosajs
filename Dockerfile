FROM node

RUN apt update -y

WORKDIR /leviosa

ADD package.json .
ADD yarn.lock .

ADD ./helpers/postInstallMessage.js ./helpers/postInstallMessage.js

RUN chmod +777 ./helpers/postInstallMessage.js
RUN yarn

RUN yarn link
ADD . .

