import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './config';
import routers from './routers'; // Menunjuk index.ts

const app: Express = express();
app.use(cors());

// Import index.ts /routers

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Purwadhika Student!');
});

app.use(routers);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  const statusMessage = err.message || 'Error';

  res.status(statusCode).send({
    error: true,
    message: statusMessage,
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`[SERVER] Server Running on Port ${PORT}`);
});
