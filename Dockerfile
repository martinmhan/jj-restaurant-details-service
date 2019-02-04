FROM node:10

WORKDIR /jj-restaurant-details-service

COPY . .

RUN npm install

EXPOSE 9002

CMD ["npm", "start"]