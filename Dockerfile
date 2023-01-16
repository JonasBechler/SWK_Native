


FROM node:16.17.1

WORKDIR /usr/app/native

COPY package.json ./
RUN npm install
COPY / ./

EXPOSE 19000

CMD ["npm", "start"]