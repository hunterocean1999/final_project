const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/learn_nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Ket noi thanh cong');
    } catch (error) {
        console.log('ket noi that bai')
    }

}

module.exports = { connect };