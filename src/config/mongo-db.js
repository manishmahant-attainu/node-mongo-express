const mongoose = require('mongoose');

const MONGOURI = 'mongodb://localhost:27017/cv_raman';

const InitMongo = async () => {
    try {
        await mongoose.connect(MONGOURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to mongodb!!')
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitMongo;
