import { OperationType } from "./operationType.enum"

export interface Draft {
    type: OperationType
    metadata: { amount: number, interest?: number, payments?: number }
}
