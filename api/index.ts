import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware compatible with simple Vercel logs
app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    res.on("finish", () => {
        const duration = Date.now() - start;
        if (path.startsWith("/api")) {
            console.log(`${req.method} ${path} ${res.statusCode} in ${duration}ms`);
        }
    });
    next();
});

registerRoutes(httpServer, app);

// Vercel Serverless Handler
export default app;
