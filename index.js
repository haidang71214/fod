import express from 'express';
import rootRouter from './src/routers/root.router.js';
import cors from 'cors';

const app = express();
// biên dịch sang kiểu json
app.use(express.json())
// call api
app.use(cors());
//
app.use(rootRouter);
//
app.get('/',(req,res)=>{
    res.send('oce')
});
app.listen(3303,()=>{
   console.log('oce, load duoc r 3303 nhe');
})