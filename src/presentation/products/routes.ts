import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ProductController } from "./controller";
import { ProductService } from "../services/product.service";



export class ProductRoutes{
    
    static get routes(): Router {
        
        const router = Router();
        // const categoryService = new CategoryService()
        // const controller = new CategoryController(categoryService )

        const productService = new ProductService()
        const controller = new ProductController(productService)

        //definir rutas aqui
         router.get('/', controller.getProducts)
         router.post("",[AuthMiddleware.validateJWT], controller.createProduct) //validamos el token con el middleware

        return router;
    }
}