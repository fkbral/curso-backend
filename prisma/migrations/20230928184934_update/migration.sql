/*
  Warnings:

  - Made the column `quantity` on table `order_products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category_id` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `unit_price_in_brl` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "order_products" ALTER COLUMN "quantity" SET NOT NULL;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "category_id" SET NOT NULL,
ALTER COLUMN "unit_price_in_brl" SET NOT NULL;
