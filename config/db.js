const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            //WARNINGS
            useNewUrlParser : true,
            useUnifiedTopology : true
            // useFindAndModify : false
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
        }catch(err){
            //IF can't connect -- stop the process
            console.log(err)
            process.exit(1)
        }
    }

    module.exports = connectDB