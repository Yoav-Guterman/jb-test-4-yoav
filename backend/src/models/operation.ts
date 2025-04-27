import mongoose from "../db/mongoose"
import { OperationType } from "../enum/OperationType.enum"
interface Operation {
    id: string,
    accountNumber: string,
    type: OperationType,
    operationDate: Date,
    metadata: { amount: number, interest?: number, payments?: number }
}

const OperationSchema = new mongoose.Schema<Operation>({
    accountNumber: String,
    type: { type: String, enum: OperationType },
    operationDate: Date,
    metadata: {
        amount: Number,
        interest: Number,
        payments: Number
    }
}, {
    toObject: {
        transform: function (doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }
})

export const OperationModel = mongoose.model<Operation>('Operation', OperationSchema, 'operations')

