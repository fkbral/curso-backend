import { Get, Path, Route, Post, Body } from "tsoa";
import { prismaClient } from "../prismaClient";

type CreateCategory = {
    name: string,
    type: 
        'sports' | 
        'apparel' | 
        'electronics' | 
        'furniture' | 
        'garden' | 
        'health care' | 
        'houseware' 
}

@Route('categories')
export class CategoriesHandler {
    @Get()
    public async getCategories() {
        const categories = await prismaClient.categories.findMany();
        return categories
    }
    @Get("{categoryId}")
    public async getCategory(@Path() categoryId: string) {
        const category = await prismaClient.categories.findUnique({ where: { id: categoryId } });
        return category
    }
    @Post()
    public async createCategory(@Body() data: CreateCategory) {
        const category = await prismaClient.categories.create({data});
        return category
    } 
}