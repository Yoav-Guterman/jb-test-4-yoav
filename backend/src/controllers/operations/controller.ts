import { NextFunction, Request, Response } from "express";
import { OperationModel } from "../../models/operation";

export async function getOperationsByAccountId(req: Request<{ accountNumber: string }>, res: Response, next: NextFunction) {
    try {
        const accountNumber = req.params.accountNumber
        const operations = await OperationModel.find({ accountNumber: accountNumber })
        res.json(operations.map(op => op.toObject()))
    } catch (e) {
        next(e)
    }
}

export async function createOperation(req: Request<{ accountNumber: string }>, res: Response, next: NextFunction) {
    try {

        const accountNumber = req.params.accountNumber

        let createParams = { ...req.body, accountNumber: accountNumber, operationDate: new Date() }

        const operation = new OperationModel(createParams)
        await operation.save()
        res.json(operation.toObject())
    } catch (e) {
        next(e)
    }
}