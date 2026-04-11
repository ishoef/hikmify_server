import express, { Application } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { categoryRouter } from "./modules/category/category.router";
import { auth } from "./lib/auth";
import { tutorProfileRouter } from "./modules/tutorProfile/tutorProfile.router";
import { bookingRouter } from "./modules/booking/booking.router";

const app: Application = express();

app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true,
  }),
);

// Json Middleware
app.use(express.json());

// Auth Route
app.all("/api/auth/*splate", toNodeHandler(auth));

app.get("/", (req, res) => {
  console.log("server is running");
  res.send("The server of Hikmify is running");
});

app.use("/category", categoryRouter);
app.use("/tutorProfile", tutorProfileRouter);
app.use("/booking", bookingRouter);
export default app;
