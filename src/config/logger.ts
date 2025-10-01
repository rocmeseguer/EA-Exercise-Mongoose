import pino from "pino";

const logger = pino({
  transport:
    process.env.NODE_ENV !== "production"
      ? {
          target: "pino-pretty", // salida legible en desarrollo
          options: { colorize: true, translateTime: "SYS:standard" }
        }
      : undefined,
  level: process.env.LOG_LEVEL || "info"
});

export default logger;
