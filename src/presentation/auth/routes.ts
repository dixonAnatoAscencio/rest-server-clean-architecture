//Se encarga de dar las respuestas al cliente
import { Router } from "express";
import { AuthController } from "./controller";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const controller = new AuthController();

    // Definir las rutas
    router.post("/login", controller.loginUser);
    router.post("/register", controller.register);

    router.post("/validate-email/:token", controller.validateEmail);

    return router;
  }
}
