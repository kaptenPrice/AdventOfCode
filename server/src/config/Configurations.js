import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT

const connectToDatabase = async () => {
    try {
        //Init connection
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })

        console.log('SUCCESSFULLY CONNECTED TO DB')
    } catch (error) {
        console.log('ERRORRO, ', error)
        process.exit()
    }
}

const connectoToPort = (app) => {
    app.listen(port, () => {
        console.log(`SERVERN ÄR IGÅNG PÅ ${port}`)
    })
}

export default { connectToDatabase, connectoToPort }
