import { Router } from "express";
import { createOperation, getOperationsByAccountId } from "../controllers/operations/controller";
import validation from "../middlewares/validation";
import { accountNumberValidator, newOperationValidator } from "../controllers/operations/validator";
import paramsValidation from "../middlewares/params-validation";

const operationsRouter = Router()

operationsRouter.get('/:accountNumber', paramsValidation(accountNumberValidator), getOperationsByAccountId)
operationsRouter.post('/', validation(newOperationValidator), createOperation)

export default operationsRouter