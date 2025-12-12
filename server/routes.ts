import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form route
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, phone, message } = req.body;

      const emailContent = `
        New Contact Message
        
        From: ${firstName} ${lastName}
        Phone: ${phone}
        
        Message:
        ${message}
      `;

      // If credentials are provided, send real email
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        let transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST || "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Website Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER, // Send to self
          subject: "New Contact Form Submission",
          text: emailContent,
        });

        console.log("Email sent successfully via Nodemailer");
      } else {
        // Fallback: Log to console
        console.log("------------------------------------------");
        console.log("MOCK EMAIL SENT (Configure EMAIL_USER/PASS to send real emails)");
        console.log(emailContent);
        console.log("------------------------------------------");
      }

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Email sending part failed:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  return httpServer;
}
