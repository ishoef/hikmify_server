import { prisma } from "./lib/prisma";
const PORT = process.env.PORT || 5000;
async function Main() {
    try {
        await prisma.$connect();
        console.log("Connected to the database successfully.");
    }
    catch (error) {
        console.log("An error occurred: ", error);
    }
}
Main();
//# sourceMappingURL=server.js.map