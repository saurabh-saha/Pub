import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema, 
  insertReservationSchema, 
  insertSubscriberSchema 
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({
        message: "Message sent successfully!",
        data: message
      });
    } catch (error) {
      const validationError = fromZodError(error as any);
      res.status(400).json({ 
        message: "Failed to send message", 
        error: validationError.message 
      });
    }
  });

  app.post("/api/reservation", async (req: Request, res: Response) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      res.status(201).json({
        message: "Reservation created successfully!",
        data: reservation
      });
    } catch (error) {
      const validationError = fromZodError(error as any);
      res.status(400).json({ 
        message: "Failed to create reservation", 
        error: validationError.message 
      });
    }
  });

  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      const validatedData = insertSubscriberSchema.parse(req.body);
      const subscriber = await storage.createSubscriber(validatedData);
      res.status(201).json({
        message: "Subscribed successfully!",
        data: subscriber
      });
    } catch (error) {
      const validationError = fromZodError(error as any);
      res.status(400).json({ 
        message: "Failed to subscribe", 
        error: validationError.message 
      });
    }
  });

  // Optional: Get routes for admin purposes
  app.get("/api/messages", async (_req: Request, res: Response) => {
    const messages = await storage.getContactMessages();
    res.status(200).json(messages);
  });

  app.get("/api/reservations", async (_req: Request, res: Response) => {
    const reservations = await storage.getReservations();
    res.status(200).json(reservations);
  });

  app.get("/api/subscribers", async (_req: Request, res: Response) => {
    const subscribers = await storage.getSubscribers();
    res.status(200).json(subscribers);
  });

  const httpServer = createServer(app);

  return httpServer;
}
