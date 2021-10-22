//DB config

require('./config/mongoose');


const express = require('express');

const post = require('./routes/api/post');
const profile = require('./routes/api/profile');
const user = require('./routes/api/user');

const app = express();

// app.get('/',(req,res) =>res.send('Hello'));

// const port = process.env.PORT || 5000;

// app.listen(port,() => console.log(`Server running port ${port}`));

//use routes

app.use('/api/user',user);
app.use('/api/post',post);
app.use('/api/profile',profile);

app.listen(5000,(req,res) =>{
 console.log('app is running in port 5000!')
})