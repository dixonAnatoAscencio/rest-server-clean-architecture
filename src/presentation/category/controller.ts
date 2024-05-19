import { Request, Response } from "express"
import { CreateCategoryDto, CustomError } from "../../domain"


export class CategoryController {

    //DI 
    constructor() {

    }


    private handleError = (error: unknown, res: Response) => {
        if(error instanceof CustomError) {
            return res.status(error.statusCode).json({message: error.message})
        }

        console.log(`${error}`)
        return res.status(500).json({message: "Internal server error"})
    }

    createCategory = async (req: Request, res: Response) => {
        const createCategoryDto = CreateCategoryDto.create(req.body) 
        
        res.json(createCategoryDto)
    }

    getCategories = async (req: Request, res: Response) => {
        res.json({message: "get categories"})
    }

}