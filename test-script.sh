#!/bin/bash
source ./.env.test
docker-compose --file ./docker-compose-test.yml up -d postgresdb
DATABASE_URL=postgresql://postgres:password@localhost:5438/testsdb?schema=public npx prisma db push
npm run test
# docker-compose --file ./docker-compose-test.yml down postgresdb
