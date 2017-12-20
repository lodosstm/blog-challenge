FROM node:8.9.1

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 80

CMD npm install bcrypt && npm run dev