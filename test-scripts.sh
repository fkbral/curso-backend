#!/bin/bash

docker-compose --file ./docker-compose-tests.yml up -d postgresdb
DATABASE_URL=postgresql://postgres:password@localhost:5438/testsdb?schema=public npx prisma db push
npm run test

