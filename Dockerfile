FROM node:lts
WORKDIR /app
ARG DATABASE_URL
ENV DATABASE_URL ${DATABASE_URL}

COPY . ./
RUN npm i
RUN npx prisma -v
RUN npm run prisma:generate:postgres
RUN npm run ecommerce:build
RUN npx prisma migrate deploy

CMD [ "npm", "run", "ecommerce:start" ]