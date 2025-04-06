// This will run when MongoDB starts
db = db.getSiblingDB('shops');

// Create collections
db.createCollection('categories');

// Now insert websites that reference those regions
db.categories.insertMany([
    {
        name: "Restaurants",
        shops: [
            { name: "Tasty Burger", address: "123 Main St", _id: new ObjectId() },
            { name: "Pizza Palace", address: "456 Oak Ave", _id: new ObjectId() },
            { name: "Sushi Spot", address: "789 Elm Blvd", _id: new ObjectId() },
            { name: "Taco Time", address: "101 Pine Rd", _id: new ObjectId() }
        ]
    },
    {
        name: "Clothing",
        shops: [
            { name: "Fashion Forward", address: "202 Style St", _id: new ObjectId() },
            { name: "Trendy Threads", address: "303 Chic Ave", _id: new ObjectId() },
            { name: "Denim Dreams", address: "404 Cool Blvd", _id: new ObjectId() }
        ]
    },
    {
        name: "Electronics",
        shops: [
            { name: "Tech World", address: "505 Digital Dr", _id: new ObjectId() },
            { name: "Gadget Galaxy", address: "606 Circuit Ln", _id: new ObjectId() }
        ]
    },
    {
        name: "Home Goods",
        shops: [
            { name: "Comfy Living", address: "707 Cozy Ct", _id: new ObjectId() }
        ]
    },
    {
        name: "Books",
        shops: []
    }
])