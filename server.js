require("./models/User");
const express=require("express");
const mongoose=require("mongoose");
const authRoutes=require('./routes/authroutes');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
const port=process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());

app.use(authRoutes);

const mongoUri="mongodb+srv://bit-by-bit:3002826917@login.sfkbg.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(process.env.ATLAS_URI || mongoUri,{         
	useNewUrlParser:true,			
	useCreateIndex:true,			
	useUnifiedTopology: true ,		
});									

mongoose.connection.on('connected',()=>{  
    console.log('connected to mongo instance');          
});

mongoose.connection.on('error',(err)=>{
	console.error('Error conneting monoogoose',err);
});

app.get('/',(req,res)=>{
    res.send("Hi there!");
});

if (process.env.NODE_ENV==="production"){
	app.use(express.static("client/build"));
}

app.listen(port || 3000,()=>{
    console.log(`listenting on ${port}`);
});