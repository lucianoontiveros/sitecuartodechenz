// Sistema de logging seguro para frontend
const isDevelopment = import.meta.env.DEV;

const logger = {
  log: (message, data = null) => {
    if (isDevelopment) {
      if (data) {
        console.log(message, data);
      } else {
        console.log(message);
      }
    }
  },
  error: (message, error = null) => {
    if (isDevelopment) {
      if (error) {
        console.error(message, error);
      } else {
        console.error(message);
      }
    } else {
      // En producción, solo loguear errores sin detalles sensibles
      console.error(message);
    }
  },
  warn: (message) => {
    if (isDevelopment) {
      console.warn(message);
    }
  },
  info: (message) => {
    if (isDevelopment) {
      console.info(message);
    }
  }
};

export default logger;