FROM node:lts
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY . ./
RUN npm i
RUN npx prisma -v
RUN npm run prisma:generate:postgres
RUN npm run ecommerce:build

CMD [ "npm", "run", "ecommerce:start" ]