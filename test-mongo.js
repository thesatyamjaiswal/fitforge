const mongoose = require('mongoose');

const uri = 'mongodb+srv://fitforge:fitforge2026@cluster0.zkhyqhe.mongodb.net/fitforge?retryWrites=true&w=majority';

console.log('Connecting to MongoDB Atlas...');
mongoose.connect(uri)
    .then(() => {
        console.log('SUCCESS: Connected to MongoDB Atlas!');
        process.exit(0);
    })
    .catch((err) => {
        console.error('FAILED:', err.message);
        process.exit(1);
    });

setTimeout(() => {
    console.log('TIMEOUT: Connection timed out after 15 seconds');
    process.exit(1);
}, 15000);
