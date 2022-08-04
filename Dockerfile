FROM node

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./prisma prisma
COPY . /app/

EXPOSE 3001:3000
CMD ["yarn", "dev"]