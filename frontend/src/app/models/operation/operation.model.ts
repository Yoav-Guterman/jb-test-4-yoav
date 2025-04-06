import { Draft } from "./draft.model";

export interface Operation extends Draft {
    id: string,
    accountNumber: string,
    operationDate: Date,
}
