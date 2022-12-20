const express =require('express')
const app= express()
const mongoose=require('mongoose')
const port = 3000
const cors = require('cors')
const dataRoute = require('./routes/dataRoute') 
const userRoute = require('./routes/userRoutes')
mongoose.connect(
    'mongodb+srv://samir724:hackathon123456@cluster0.ycj6o80.mongodb.net/test',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }
    ).then(()=>{
        console.log('db connected')
    }).catch((error)=>{
        console.log(error)
    });

app.listen(port,()=>{     
    console.log('listening to this port',port )
})
app.use(express.json())
app.use(cors())
app.use('/api',dataRoute)
app.use('/api',userRoute)
