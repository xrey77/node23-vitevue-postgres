import { DataSource } from "typeorm";
import { User } from './entities/user';
import { Product } from "./entities/products";

export const AppDataSource = new DataSource({
  type: "postgres", // or "mysql", "postgres", "sqlite", etc.
  host: "localhost",
  port: 8090,
  username: "rey",
  password: "rey",
  database: "node23_vitevue",
  synchronize: true, // Use with caution in production
  logging: false,
  entities: [User, Product], // List your entities here
  migrations: [],
  subscribers: [],
});