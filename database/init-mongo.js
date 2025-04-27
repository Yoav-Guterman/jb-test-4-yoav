// This will run when MongoDB starts
db = db.getSiblingDB('bankAccountsOps');

// Create collections
db.createCollection('operations');

// Now insert websites that reference those regions
db.operations.insertMany([
    {
        accountNumber: "AB123456",
        type: "Deposit",
        operationDate: new Date("2024-03-01"),
        metadata: {
            amount: 500
        }
    },
    {
        accountNumber: "AB123456",
        type: "Withdrawal",
        operationDate: new Date("2024-03-05"),
        metadata: {
            amount: 150
        }
    },
    {
        accountNumber: "AB123456",
        type: "Loan",
        operationDate: new Date("2024-03-10"),
        metadata: {
            amount: 5000,
            interest: 5,
            payments: 24
        }
    },
    {
        accountNumber: "XY789012",
        type: "Deposit",
        operationDate: new Date("2024-02-15"),
        metadata: {
            amount: 1200
        }
    },
    {
        accountNumber: "XY789012",
        type: "Withdrawal",
        operationDate: new Date("2024-02-20"),
        metadata: {
            amount: 300
        }
    },
    {
        accountNumber: "XY789012",
        type: "Loan",
        operationDate: new Date("2024-02-25"),
        metadata: {
            amount: 2500,
            interest: 4,
            payments: 12
        }
    },
    {
        accountNumber: "PQ567890",
        type: "Deposit",
        operationDate: new Date("2024-01-10"),
        metadata: {
            amount: 750
        }
    },
    {
        accountNumber: "PQ567890",
        type: "Withdrawal",
        operationDate: new Date("2024-01-15"),
        metadata: {
            amount: 200
        }
    },
    {
        accountNumber: "PQ567890",
        type: "Loan",
        operationDate: new Date("2024-01-20"),
        metadata: {
            amount: 10000,
            interest: 8,
            payments: 36
        }
    },
    {
        accountNumber: "PQ567890",
        type: "Deposit",
        operationDate: new Date("2024-01-25"),
        metadata: {
            amount: 300
        }
    }
])