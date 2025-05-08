import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const { PORT } = process.env;

app.use(cors({
  origin: ['http://localhost:3000',],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());


app.listen(PORT, () => {
  console.log('Server listening on:', PORT);
});