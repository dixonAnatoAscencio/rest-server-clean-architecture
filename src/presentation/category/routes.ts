import { Router } from "express";
import { CategoryController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { CategoryService } from "../services/category.service";


export class CategoryRoutes{
    
    static get routes(): Router {
        
        const router = Router();
        const categoryService = new CategoryService()
        const controller = new CategoryController(categoryService )


        //definir rutas aqui
        router.get('/', controller.getCategories)
        router.post("",[AuthMiddleware.validateJWT], controller.createCategory) //validamos el token con el middleware

        return router;
    }
}