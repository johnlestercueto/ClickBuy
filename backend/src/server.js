// Load environment variables mula sa .env file
require('dotenv').config();

// Import ng Express app (nasa hiwalay na 'app.js' file)
const app = require('./app')

// Import ng function para kumonekta sa database
const connectDB = require('./config/db')

// Gamitin ang PORT mula sa environment variables, default 5000 kung wala
const PORT = process.env.PORT || 5000;

// Function na magsisimula ng server
const startServer = async () => {
    try {
        // Subukan kumonekta sa database (async kaya need ng await)
        await connectDB();

        // Kung successful ang DB connection, tsaka pa lang paandarin ang server
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`)
        })
    } catch (error) {
        // Kung may error sa DB connection o server start, ilalabas sa console
        console.error(error);
    }
}

// Tawagin ang function para mag-start na ang server
startServer();
