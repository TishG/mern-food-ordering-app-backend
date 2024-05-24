import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import myUserRoute from './routes/MyUserRoute';

const uri: string = process.env.MONGODB_CONNECTION_STRING || '';

mongoose
	.connect(uri)
	.then(() => console.log('MongoDB connected successfully'))
	.catch((err) => console.error('MongoDB connection error:', err));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', async (req: Request, res: Response) => {
	return res.send({ message: 'Health OK!' });
});

app.use('/api/my/user', myUserRoute);

app.listen(7000, () => {
	console.log('server started on localhost:7000');
});
