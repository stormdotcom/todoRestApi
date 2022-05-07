import express from 'express';
import logger from 'morgan';
import todoRouter from './routes/todo.js';
import mongoose from 'mongoose';


const app = express();
const CONNECTION_URL = "mongodb://localhost:27017/todos"

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/', todoRouter);

app.use( function(err, req, res, next){
    res.locals.message = err.message;
    
    res.status(err.status || 500)
    res.json( {message : err.message})

})

mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology : true })
.then(()=> { console.log('DB Connected')
app.listen(4000, ()=> console.log('Server running on port 4000'))
})
.catch((err)=> console.log('Error connecting DB \n', err.message));


