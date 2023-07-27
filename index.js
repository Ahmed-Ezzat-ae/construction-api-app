import express from 'express';
import mongoose from 'mongoose';
import aboutRouter from './routes/about.js';
import projectsRouter from './routes/projects.js';
import contentRouter from './routes/content.js';
import servicesRouter from './routes/services.js';
import servicesRouter2 from './routes/services2.js';
import solutionRouter from './routes/solutions.js';
import homeRouter from './routes/home.js';
import contactRouter from './routes/contact.js';
import cors from 'cors';
import dotenv from "dotenv"

dotenv.config();
const port  = process.env.PORT
const db_url = process.env.DB_URL

const app = express();
app.use(cors());

app.use(express.json({ extended: true, limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
mongoose.set('strictQuery', false);
mongoose
  .connect(db_url)
  .then(() => {
    console.log('Connected to database successfully');
    app.listen(port, () =>
      console.log(`Server is running on http://localhost:${port}`)
    );
  })
  .catch((error) => console.log('Error when connect to database => ', error));

app.use('/api/:lang/about', aboutRouter);
app.use('/api/:lang/projects', projectsRouter);
app.use('/api/:lang/content', contentRouter);
app.use('/api/:lang/services1', servicesRouter);
app.use('/api/:lang/services2', servicesRouter2);
app.use('/api/:lang/solutions', solutionRouter);
app.use('/api/:lang/home', homeRouter);
app.use('/api/:lang/contact', contactRouter);
