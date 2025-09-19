// Import mongoose library para makapag-interact sa MongoDB database
const mongoose = require('mongoose');

// Gumagawa tayo ng Schema para sa 'User' collection
// Schema = template o structure ng document sa MongoDB
const UserSchema = new mongoose.Schema({
    // Field para sa username ng user
    username: {
        type: String,      // Uri ng data: String
        required: true      // Mandatory field, hindi pwedeng walang value
    },
    // Field para sa phone number ng user
    email : {
        type: String,      // Uri ng data: String
        required: true,    // Mandatory field
        unique: true       // Unique value, hindi pwedeng magkapareho sa ibang document
    },
    // Field para sa password ng user
    password: {
        type: String,      // Uri ng data: String
        required: true      // Mandatory field
    },
    // Field para sa role ng user (admin o regular user)
    role: { 
        type: String, 
        enum: ['user', 'admin'], // Pwede lang sa mga values na ito
        default: 'user'          // Default value kung wala ibinigay
    },
}, { 
    timestamps: true  // Automatic na nag-a-add ng 'createdAt' at 'updatedAt' fields
});

// Export natin ang model para magamit sa ibang parts ng project
// Model = ginagamit para gumawa, magbasa, mag-update, mag-delete ng documents sa MongoDB
module.exports = mongoose.model('User', UserSchema);
