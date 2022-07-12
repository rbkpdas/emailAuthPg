import express,  {Request, Response} from "express";
//import homeRoute from '../src/routes/app-routes';
const app = express();

const PORT = process.env.PORT || 3001;

//app.use('/api/home', homeRoute);

app.get('/', (req:Request, res:Response) => {
    res.send('Hello Yonata')
  })
  

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
  })