import "dotenv/config";
console.log("Test script running");
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI ? "Defined" : "Undefined");
