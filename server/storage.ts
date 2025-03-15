import { 
  users, User, InsertUser, 
  contactMessages, ContactMessage, InsertContactMessage,
  reservations, Reservation, InsertReservation,
  subscribers, Subscriber, InsertSubscriber
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  
  getReservations(): Promise<Reservation[]>;
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  
  getSubscribers(): Promise<Subscriber[]>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private reservations: Map<number, Reservation>;
  private subscribers: Map<number, Subscriber>;
  currentUserId: number;
  currentMessageId: number;
  currentReservationId: number;
  currentSubscriberId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.reservations = new Map();
    this.subscribers = new Map();
    this.currentUserId = 1;
    this.currentMessageId = 1;
    this.currentReservationId = 1;
    this.currentSubscriberId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const createdAt = new Date();
    const contactMessage: ContactMessage = { ...message, id, createdAt };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }

  async createReservation(reservation: InsertReservation): Promise<Reservation> {
    const id = this.currentReservationId++;
    const createdAt = new Date();
    const newReservation: Reservation = { ...reservation, id, createdAt };
    this.reservations.set(id, newReservation);
    return newReservation;
  }

  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }

  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    // Check if email already exists
    const existing = Array.from(this.subscribers.values()).find(
      (sub) => sub.email === subscriber.email
    );
    
    if (existing) {
      return existing;
    }
    
    const id = this.currentSubscriberId++;
    const createdAt = new Date();
    const newSubscriber: Subscriber = { ...subscriber, id, createdAt };
    this.subscribers.set(id, newSubscriber);
    return newSubscriber;
  }
}

export const storage = new MemStorage();
