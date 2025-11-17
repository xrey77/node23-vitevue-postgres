export default {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "rey",
    PASSWORD: process.env.DB_PASSWORD || "rey",
    DB: process.env.DB_NAME || "node23_vitevue",
    PORT: parseInt(process.env.DB_PORT || "8090", 10),
  };
  