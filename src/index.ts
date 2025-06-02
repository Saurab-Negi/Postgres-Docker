import express from 'express';
import dotenv from 'dotenv';
import emailRoutes  from './routes/emailRoute'

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use('/', emailRoutes)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})