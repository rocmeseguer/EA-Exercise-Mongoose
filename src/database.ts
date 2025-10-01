import mongoose from 'mongoose';
import logger from "./config/logger.js";

// Connection URI
const mongoURI = 'mongodb://localhost:27017/ea-exercise-mongoose';  
 
// Connection
export async function startConnection() {
    mongoose.set('strictQuery', true); // Mantiene el comportamiento actual

    await mongoose.connect(mongoURI)
    .then(() => 
        logger.info('Conectado a MongoDB'))
    .catch(err => 
        logger.error(err, 'Error al conectar:'));

    // Elimina todos los users de la colección
    await mongoose.connection.db.dropCollection('users')
    .then(() => 
        logger.info('Colección eliminada'))
    .catch(err => 
        logger.error(err, 'Error al eliminar colección:'));

    // Elimina todos los todos de la colección
    await mongoose.connection.db.dropCollection('todos')
    .then(() => 
        logger.info('Colección eliminada'))
    .catch(err => 
        logger.error(err, 'Error al eliminar colección:'));

}