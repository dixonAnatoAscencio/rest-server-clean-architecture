import { Router } from "express";
import { CategoryController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";


export class CategoryRoutes{
    
    static get routes(): Router {
        
        const router = Router();
        const controller = new CategoryController( )


        //definir rutas aqui
        router.get('/', controller.getCategories)
        router.post("",[AuthMiddleware.validateJWT], controller.createCategory) //validamos el token con el middleware

        return router;
    }
}